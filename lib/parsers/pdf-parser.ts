import pdfParse from 'pdf-parse';

export async function parsePDF(buffer: Buffer): Promise<string> {
  try {
    const data = await pdfParse(buffer, {
      pagerender: function(pageData: any) {
        return pageData.getTextContent();
      }
    });
    
    // Clean and normalize the text
    const cleanText = data.text
      .replace(/\s+/g, ' ')
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .trim();
    
    return cleanText;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to parse PDF file');
  }
}