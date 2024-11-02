'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { QuestionGenerator } from './question-generator';

export function TextAnalyzer() {
  const [text, setText] = useState('');
  const [questions, setQuestions] = useState<Array<{ question: string; answer: string }>>([]);

  const handleGenerate = async (count: number) => {
    // TODO: Implement actual text processing logic
    const mockQuestions = Array.from({ length: count }, (_, i) => ({
      question: `Sample Question ${i + 1} from text input`,
      answer: `Sample Answer ${i + 1} for the question.`,
    }));
    setQuestions(mockQuestions);
  };

  return (
    <div className="space-y-6">
      <Textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[200px]"
      />

      <QuestionGenerator onGenerate={handleGenerate} questions={questions} />
    </div>
  );
}