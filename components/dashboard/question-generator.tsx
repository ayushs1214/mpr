'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface QuestionGeneratorProps {
  onGenerate: (count: number) => void;
  questions: Array<{ question: string; answer: string }>;
}

export function QuestionGenerator({ onGenerate, questions }: QuestionGeneratorProps) {
  const [questionCount, setQuestionCount] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(Number(value)) && Number(value) >= 1 && Number(value) <= 30)) {
      setQuestionCount(value);
    }
  };

  const handleGenerate = async () => {
    if (!questionCount || Number(questionCount) < 1) {
      return;
    }
    setIsGenerating(true);
    await onGenerate(Number(questionCount));
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input
            type="number"
            value={questionCount}
            onChange={handleInputChange}
            placeholder="Enter number of questions (1-30)"
            className="transition-all duration-300 focus:scale-105"
          />
          <p className="text-sm text-muted-foreground mt-1 ml-1">
            Generate between 1 and 30 questions
          </p>
        </div>
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !questionCount || Number(questionCount) < 1}
          className={cn(
            "relative overflow-hidden group",
            "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
            "hover:from-blue-700 hover:via-purple-700 hover:to-blue-700",
            "transition-all duration-300",
            isGenerating && "animate-pulse"
          )}
        >
          {isGenerating ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating...</span>
            </div>
          ) : (
            "Generate Questions"
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Button>
      </div>

      {questions.length > 0 && (
        <Accordion type="single" collapsible className="w-full space-y-2">
          {questions.map((qa, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg overflow-hidden bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-blue-500/10 transition-all duration-300"
            >
              <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-blue-500/10">
                <span className="text-left">Question {index + 1}: {qa.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
                <div className="font-medium text-muted-foreground">
                  {qa.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}