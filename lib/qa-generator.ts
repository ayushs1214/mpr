interface Question {
  question: string;
  answer: string;
}

export async function generateQuestionsFromText(text: string, numQuestions: number): Promise<Question[]> {
  try {
    // Split text into sentences and paragraphs
    const sentences = text.split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 10);
    
    const questions: Question[] = [];
    const usedSentences = new Set();

    while (questions.length < numQuestions && sentences.length > questions.length) {
      // Select a random sentence that hasn't been used yet
      let sentenceIndex;
      do {
        sentenceIndex = Math.floor(Math.random() * sentences.length);
      } while (usedSentences.has(sentenceIndex));

      usedSentences.add(sentenceIndex);
      const sentence = sentences[sentenceIndex];

      // Generate different types of questions
      const questionTypes = [
        {
          generate: (s: string) => ({
            question: `What is the main idea expressed in: "${s}"?`,
            answer: `The main idea is: ${s}`
          })
        },
        {
          generate: (s: string) => ({
            question: `Explain the concept discussed in: "${s}"`,
            answer: `The concept can be explained as: ${s}`
          })
        },
        {
          generate: (s: string) => ({
            question: `What are the key points mentioned in: "${s}"?`,
            answer: `The key points are: ${s}`
          })
        }
      ];

      // Select a random question type
      const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      questions.push(questionType.generate(sentence));
    }

    return questions;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw new Error('Failed to generate questions');
  }
}