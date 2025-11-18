const express = require('express');
const app = express();


app.use(express.json());

app.post('/api/wordlength', (req, res) => {
  const sentence = req.body.sentence;

  if (!sentence) {
    return res.status(400).send({ message: 'Please provide a valid sentence' });
  }

  const wordsArray = sentence.trim().split(/\s+/);
  const wordCount = wordsArray.length;
  const uniqueWordsSet = new Set(wordsArray.map(word => word.toLowerCase()));
  const uniqueWords = Array.from(uniqueWordsSet);
  const reversedSentence = [...wordsArray].reverse().join(' ');

  res.json({
    totalWords: wordCount,
    uniqueWords: uniqueWords,
    reversed: reversedSentence
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running successfully at http://localhost:${PORT}`);
});

//http://localhost:3000/api/wordlength
