import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV == 'Development') {
  console.log('We are in Development Mode');
}

if (process.env.NODE_ENV == 'Production') {
  console.log('We are in Production Mode');
}

app.get('*', (req, res) => {
  res.send(`<h1>Docker Compose ${process.env.NODE_ENV} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

export default app;
