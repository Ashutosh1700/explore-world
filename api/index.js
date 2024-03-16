import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Database is connected");
    }).catch(err => {
        console.log(err);
    })


app.listen(3000, () => {
    console.log("Server is runnig at 3000 ")
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)