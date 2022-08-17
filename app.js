import express from 'express';
const app = express();
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';

app.use(express.json());

app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.send(`<h1>OOPS No Page Found! 😞 </h1>`);
});

export default app;
