import dbConnect from "../config/dbConnect"
import Product from "../models/product"

dbConnect()

export async function indexProduct() {
  const products = await Product.find()
  return products
}