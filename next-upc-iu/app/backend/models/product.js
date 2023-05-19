import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter name']
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Please enter price']
  },
  imgURL: {
    type: String,
  }
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)