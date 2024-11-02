'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileUp, X, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FileWithError {
  file: File;
  error?: string;
}

interface Question {
  question: string;
  answer: string;
}

interface FileResult {
  filename: string;
  questions: Question[];
}

export function FileUploader() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileWithError[]>([]);
  const [results, setResults] = useState<FileResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [questionCount, setQuestionCount] = useState<string>('');

  const validateFile = (file: File): string | undefined => {
    const supportedTypes = [
      'application/pdf',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ];
    
    if (!supportedTypes.includes(file.type)) {
      if (file.type === 'application/zip') {
        return 'File format not supported: ZIP files are not allowed';
      }
      return 'File format not supported: Only PDF and PPT files are allowed';
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      return 'File size exceeds 10MB limit';
    }
    
    return undefined;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        error: validateFile(file)
      }));
      setFiles(prev => [...prev, ...newFiles]);
      setResults([]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).map(file => ({
      file,
      error: validateFile(file)
    }));
    setFiles(prev => [...prev, ...droppedFiles]);
    setResults([]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setResults([]);
  };

  const processFiles = async () => {
    if (files.length === 0 || !questionCount || Number(questionCount) < 1) return;
    setIsProcessing(true);
    
    try {
      const validFiles = files.filter(f => !f.error);
      const formData = new FormData();
      validFiles.forEach(({ file }) => formData.append('files', file));
      formData.append('numQuestions', questionCount);

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process files');
      }

      const data = await response.json();
      setResults(data.results);
      
      toast({
        title: "Success",
        description: "Files processed successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to process files",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const validFiles = files.filter(f => !f.error);
  const hasErrors = files.some(f => f.error);

  return (
    <div className="space-y-6">
      {/* File Upload Zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300",
          "hover:border-primary hover:bg-primary/5",
          isDragging ? "border-primary bg-primary/5 scale-105" : "border-muted-foreground/25",
          "relative overflow-hidden group"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept=".pdf,.ppt,.pptx"
        />
        <div className="relative z-10">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Drag & drop your PDF or PPT files here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Maximum file size: 10MB
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Selected Files</h3>
          {files.map((file, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg",
                file.error ? "bg-destructive/10" : "bg-muted"
              )}
            >
              <div className="flex items-center space-x-3">
                <FileUp className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{file.file.name}</p>
                  {file.error ? (
                    <p className="text-sm text-destructive">{file.error}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {(file.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Question Count Input */}
      {validFiles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                type="number"
                value={questionCount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || (!isNaN(Number(value)) && Number(value) >= 1 && Number(value) <= 30)) {
                    setQuestionCount(value);
                  }
                }}
                placeholder="Enter number of questions (1-30)"
                className="transition-all duration-300 focus:scale-105"
              />
              <p className="text-sm text-muted-foreground mt-1 ml-1">
                Generate between 1 and 30 questions
              </p>
            </div>
          </div>

          {/* Process Button */}
          <Button
            onClick={processFiles}
            disabled={isProcessing || !questionCount || Number(questionCount) < 1}
            className={cn(
              "w-full relative overflow-hidden group",
              "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
              "hover:from-blue-700 hover:via-purple-700 hover:to-blue-700",
              "transition-all duration-300",
              isProcessing && "animate-pulse"
            )}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing {validFiles.length} file{validFiles.length !== 1 ? 's' : ''}...</span>
              </div>
            ) : (
              <span>Process {validFiles.length} File{validFiles.length !== 1 ? 's' : ''}</span>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{result.filename}</h3>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {result.questions.map((qa, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${index}-${qIndex}`}
                    className="border rounded-lg overflow-hidden bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-blue-500/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-blue-500/10">
                      <span className="text-left">Question {qIndex + 1}: {qa.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
                      <div className="font-medium text-muted-foreground">
                        {qa.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}