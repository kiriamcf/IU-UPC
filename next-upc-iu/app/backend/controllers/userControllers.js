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
    var user = await User.findOne({id_google: id}).populate('products');
  }
  else {
    var user = await User.findOne({ _id: new ObjectId(id) })
  }
  return user
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