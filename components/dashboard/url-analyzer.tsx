'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { QuestionGenerator } from './question-generator';

export function UrlAnalyzer() {
  const [url, setUrl] = useState('');
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([]);

  const handleGenerate = async (count: number) => {
    // TODO: Implement actual URL processing logic
    const mockQuestions = Array.from({ length: count }, (_, i) => ({
      question: `Sample Question ${i + 1} from URL content`,
      answer: `Sample Answer ${i + 1} for the question.`,
    }));
    setQuestions(mockQuestions);
  };

  return (
    <div className="space-y-6">
      <Input
        type="url"
        placeholder="Enter URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <QuestionGenerator onGenerate={handleGenerate} questions={questions} />
    </div>
  );
}