const { textStats } = require('@adityatyagi/textstats');

const text = 'Node.js is fun to learn. Node.js is useful.';

console.log('Text:', text);
console.log('Word count:', textStats.wordCount(text));
console.log('Character count:', textStats.charCount(text));
console.log(
  'Character count including spaces:',
  textStats.charCount(text, { includeSpaces: true }),
);
console.log('Reading time in minutes:', textStats.readingTime(text));
console.log('Three most common words:', textStats.topWords(text, 3));
console.log('Full analysis:', textStats.analyze(text));
