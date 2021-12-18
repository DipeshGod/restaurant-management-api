import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('api started');
});

app.get('/', (req, res) => res.send('API Running u can now start working'));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;
