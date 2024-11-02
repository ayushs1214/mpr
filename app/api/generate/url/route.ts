import { NextRequest, NextResponse } from 'next/server';
import { generateQuestionsWithGemini } from '@/lib/gemini';

async function fetchAndExtractText(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Basic HTML to text conversion
    // Remove HTML tags and decode entities
    const text = html
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
    
    return text;
  } catch (error) {
    console.error('Error fetching URL:', error);
    throw new Error('Failed to fetch URL content');
  }
}

export async function POST(req: NextRequest) {
  try {
    const { url, numQuestions } = await req.json();

    if (!url) {
      return NextResponse.json(
        { error: 'No URL provided' },
        { status: 400 }
      );
    }

    const text = await fetchAndExtractText(url);
    const questions = await generateQuestionsWithGemini(text, numQuestions);

    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error processing URL:', error);
    return NextResponse.json(
      { error: 'Failed to process URL' },
      { status: 500 }
    );
  }
}