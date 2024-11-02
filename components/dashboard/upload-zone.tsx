'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

export function UploadZone() {
  const [isDragging, setIsDragging] = useState(false);

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
    // Handle file upload logic here
    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
        isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
      )}
    >
      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        Drag & drop files here or click to browse
      </p>
    </div>
  );
}