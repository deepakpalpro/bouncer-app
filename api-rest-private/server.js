import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js'
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/mongodb.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', authRoutes);
app.use('/api/v1/users', userRoutes);


app.get('/', (req, res) => {
  res.send('API is running,,');
}); 


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

