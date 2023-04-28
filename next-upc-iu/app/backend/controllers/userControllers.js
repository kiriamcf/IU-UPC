import User from "../models/user"

export async function indexUser(req, res, next) {
  const users = await User.find()
  res.status(200).json({
    users
  })
}

export async function showUser(req, res, next) {
  // const userId = req.params.userId
  res.status(200).json({
    hola: "mon"
  })
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