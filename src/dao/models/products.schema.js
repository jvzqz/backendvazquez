import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
        tittle: String,
        description: String,
        price: Number,
        thumbnail: String,
        code: String,
        stock: Number
      })


export default mongoose.model('productModel', productSchema)
