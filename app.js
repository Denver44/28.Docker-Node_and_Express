import express from 'express';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';

const { REDIS_IP, REDIS_PORT, SESSION_SECRET } = process.env;

const app = express();
const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  port: REDIS_PORT,
  host: REDIS_IP,
});

app.use(express.json());

//  Middleware for sessions.
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false, // if true: only transmit cookie over https
      httpOnly: true, // if true: prevents client side JS from reading the cookie
      maxAge: 30000, // session max age in milliseconds
      sameSite: 'lax', // make sure sameSite is not none
    },
  })
);

app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.send(
    `<h1>Welcome to Node Docker Tutorial Web App. I am built with Node & Express 💚 </h1>`
  );
});

export default app;
