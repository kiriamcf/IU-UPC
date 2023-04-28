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
})

export default mongoose.models.User || mongoose.model('User', userSchema)