import { NextRequest, NextResponse } from 'next/server';
import { generateQuestionsWithGemini } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const { text, numQuestions } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'No text provided' },
        { status: 400 }
      );
    }

    const questions = await generateQuestionsWithGemini(text, numQuestions);
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error processing text:', error);
    return NextResponse.json(
      { error: 'Failed to process text' },
      { status: 500 }
    );
  }
}