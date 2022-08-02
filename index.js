import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Docker Anonymous Volumes 🟩</h1>');
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

export default app;
