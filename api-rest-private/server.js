import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/mongodb.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Bouncer!');
}); 


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

