import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('DB connection error:', err));
