import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
     pogId: String,
  supc: String,
  brand: String,
  description: String,
  size: String,
  category: String,
  subCategory: String,
  price: Number,
  quantity: Number,
  country: String,
  sellerCode: String,
  createdAt: Date,
  stock: Boolean
    
})

export default mongoose.model("Product",productSchema)