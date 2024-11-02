import { NextRequest, NextResponse } from 'next/server';
import { parsePDF } from '@/lib/parsers/pdf-parser';
import { parsePPT } from '@/lib/parsers/ppt-parser';
import { generateQuestionsWithGemini } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const numQuestions = Number(formData.get('numQuestions')) || 5;

    if (!files.length) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    const results = [];

    for (const file of files) {
      try {
        const buffer = Buffer.from(await file.arrayBuffer());
        let text = '';

        // Parse file based on type
        if (file.type === 'application/pdf') {
          text = await parsePDF(buffer);
        } else if (
          file.type === 'application/vnd.ms-powerpoint' ||
          file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        ) {
          text = await parsePPT(buffer);
        } else {
          throw new Error(`Unsupported file type: ${file.type}`);
        }

        // Generate questions using Gemini
        const questions = await generateQuestionsWithGemini(text, numQuestions);
        
        results.push({
          filename: file.name,
          questions,
        });
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
        results.push({
          filename: file.name,
          error: error instanceof Error ? error.message : 'Failed to process file',
        });
      }
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error processing files:', error);
    return NextResponse.json(
      { error: 'Failed to process files' },
      { status: 500 }
    );
  }
}