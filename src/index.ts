import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user';
import mongoose from 'mongoose';
import { authRouter } from './routes/auth';
import { apiDocRouter } from './routes/apiDoc';

dotenv.config();

const app = express();

app.use(cors());

// Body parser
app.use(express.json());

//api docs
app.get('/', apiDocRouter);

//routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;

let server: any;

//mongdb connection
mongoose.connect(process.env.ATLAS_URI!, {}, () => {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
