import dbConnect from "@/app/backend/config/dbConnect"
import { indexUser, showUser, createUser, updateUser, deleteUser } from "@/app/backend/controllers/userControllers"

export default function handler(req, res) {
  dbConnect()
  if (req.method === 'GET') {
    indexUser(req, res)
  }
  else if (req.method === 'POST') {

  }
}