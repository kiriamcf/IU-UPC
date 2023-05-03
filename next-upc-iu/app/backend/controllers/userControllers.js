import dbConnect from "../config/dbConnect"
import User from "../models/user"
import { ObjectId } from "mongodb"

dbConnect()

export async function indexUser() {
  const users = await User.find()
  return users
}

export async function showUser(id) {
  const user = await User.findOne(id)
  return user
}

export async function createUser(req, res, next) {
  const user = await User.create(await req.body)
  res.status(200).json({
    user
  })
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