import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
 
app.use('/api', productRoutes);

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
 })

