import mongoose from "mongoose"

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("already connected")
    return
  }
  mongoose.set('strictQuery', true)
  await mongoose.connect('mongodb+srv://iuprojectupc:2p2bSXJbZJPSmPt3@cluster0.tpupcya.mongodb.net/?retryWrites=true&w=majority')
  console.log("connecting...")
}

export default dbConnect

