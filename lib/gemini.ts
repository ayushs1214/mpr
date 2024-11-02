import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateQuestionsWithGemini(text: string, numQuestions: number): Promise<Array<{ question: string; answer: string }>> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Generate ${numQuestions} insightful questions and detailed answers from the following text. 
    Focus on key concepts, important details, and deeper understanding.
    Format the response as a JSON array of objects with "question" and "answer" fields.

    Text: ${text}

    Requirements:
    - Generate exactly ${numQuestions} questions
    - Questions should test understanding, not just recall
    - Provide comprehensive answers
    - Ensure answers are accurate and based on the text
    - Use clear and concise language

    Example format:
    [
      {
        "question": "What is the main concept discussed in...",
        "answer": "The main concept is..."
      }
    ]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text_response = response.text();
    
    try {
      // Extract the JSON array from the response
      const jsonStr = text_response.match(/\[[\s\S]*\]/)?.[0] || '[]';
      const questions = JSON.parse(jsonStr);
      
      // Validate the structure and number of questions
      if (!Array.isArray(questions) || 
          questions.length !== numQuestions || 
          !questions.every(q => q.question && q.answer)) {
        throw new Error('Invalid response format or incorrect number of questions');
      }
      
      return questions;
    } catch (error) {
      console.error('Error parsing Gemini response:', error);
      throw new Error('Failed to parse Gemini response');
    }
  } catch (error) {
    console.error('Error generating questions with Gemini:', error);
    throw error;
  }
}

export async function validateContent(text: string): Promise<boolean> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Analyze the following text and respond with "true" if it contains meaningful content 
    for generating questions, or "false" if it's too short, contains inappropriate content, or is nonsensical.

    Text: ${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().toLowerCase().includes('true');
  } catch (error) {
    console.error('Error validating content:', error);
    return false;
  }
}

export async function summarizeText(text: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Provide a concise summary of the following text in 2-3 sentences:

    Text: ${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error summarizing text:', error);
    throw error;
  }
}