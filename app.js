import express from 'express';
const app = express();
import postRouter from './routes/postRoutes.js';

app.use(express.json());

app.use('/post', postRouter);

app.get('*', (req, res) => {
  res.send(`<h1>OOPS No Page Found! 😞 </h1>`);
});

export default app;
