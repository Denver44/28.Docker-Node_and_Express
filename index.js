import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.ENVIRONMENT == 'Development') {
  console.log('We are in Development Mode');
}

if (process.env.ENVIRONMENT == 'Production') {
  console.log('We are in Production Mode');
}

app.get('*', (req, res) => {
  res.send('<h1>Docker Compose ✅</h1>');
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

export default app;
