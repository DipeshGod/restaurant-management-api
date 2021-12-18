import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user';

dotenv.config();

const app = express();

app.use(cors());

// Body parser
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello Restaurant management api');
});

app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
