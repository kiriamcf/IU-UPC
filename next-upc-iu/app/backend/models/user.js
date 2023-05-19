import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter name']
  },
  surname: {
    type: String,
    required: [true, 'Please enter surname']
  },
  email: {
    type: String,
    required: [true, 'Please enter email']
  },
  password: {
    type: String,
    required: [true, 'Please enter password']
  },
  id_google: {
    type: String,
  },
  cart: {
    type: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number
      }
    }],
    default: []
  }
})

export default mongoose.models.User || mongoose.model('User', userSchema)