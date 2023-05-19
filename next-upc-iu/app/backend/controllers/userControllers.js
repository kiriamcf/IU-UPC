import dbConnect from "../config/dbConnect"
import User from "../models/user"
import Product from "../models/product"
import { ObjectId } from "mongodb"

dbConnect()

export async function indexUser() {
  const users = await User.find()
  return users
}

export async function showUser(id, provider) {
  if (provider == 'google') {
    var user = await User.findOne({id_google: id}).populate('cart.product')
  }
  else {
    var user = await User.findOne({ _id: new ObjectId(id) })
  }
  return user
}

export async function addCartUser(req) {
  const {userId, productId} = await req.json()
  const user = await User.findOne({id_google: userId})
  const existingProduct = user.cart.find(item => new ObjectId(productId).equals(item.product))
  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    const newProduct = {
      product: new ObjectId(productId),
      quantity: 1
    }
    user.cart.push(newProduct)
  }
  await user.save()

  return user.populate('cart.product')
}

export async function createUser(req) {
  const user = await User.create(await req.json())
  return user
}

export async function updateUser(req, res, next) {
  res.status(200).json({

  })
}

export async function deleteUser(req, res, next) {
  res.status(200).json({
    hola: "mon"
  })
}