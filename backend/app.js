import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors({ credentials: "same origin" }));


app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', authRoutes)
app.use('/api',userRoutes)
app.use('/api',cartRoutes)



// connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected");
})
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
})
