import fs from 'fs';
import path from 'path';

/**
 * Calculate reading time for a given text
 * @param text - The text content to calculate reading time for
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  if (!text || typeof text !== 'string') {
    console.warn('Invalid text provided to calculateReadingTime:', text);
    return 1;
  }
  
  // Remove markdown syntax and count words
  const cleanText = text
    .replace(/[#*`~\[\]()]/g, '') // Remove markdown syntax
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Count words more accurately for mixed Chinese and English content
  let wordCount = 0;
  
  // Split by spaces and count English words
  const englishWords = cleanText.split(' ').filter(word => word.length > 0);
  wordCount += englishWords.length;
  
  // Count Chinese characters (each character counts as a word for reading time)
  const chineseChars = cleanText.match(/[\u4e00-\u9fff]/g) || [];
  wordCount += chineseChars.length;
  
  // Remove Chinese characters from the text to avoid double counting
  const textWithoutChinese = cleanText.replace(/[\u4e00-\u9fff]/g, '');
  const remainingWords = textWithoutChinese.split(' ').filter(word => word.length > 0);
  wordCount = chineseChars.length + remainingWords.length;
  
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  console.log(`Reading time calculation: ${wordCount} words (${chineseChars.length} Chinese chars + ${remainingWords.length} English words), ${readingTime} minutes`);
  
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Read content from a markdown file
 * @param filePath - Path to the markdown file
 * @returns The content of the file
 */
export function readMarkdownContent(filePath: string): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Remove frontmatter
    const contentWithoutFrontmatter = content.replace(/---[\s\S]*?---/, '').trim();
    return contentWithoutFrontmatter;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return '';
  }
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted reading time string
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) {
    return 'Less than 1 min read';
  } else if (minutes === 1) {
    return '1 min read';
  } else {
    return `${minutes} min read`;
  }
} 