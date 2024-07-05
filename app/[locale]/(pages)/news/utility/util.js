// utils.js
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 238; // Average reading speed
  let totalWords = 0;

  // Split text into words using a regular expression and count total words
  text.forEach(sentence => {
    totalWords += sentence.split(/\s+/).filter(word => word.length > 0).length;
  });

  const readingTime = Math.ceil(totalWords / wordsPerMinute);
  return readingTime;
};