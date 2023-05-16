import { indexUser, showUser, createUser, updateUser, deleteUser } from "@/app/backend/controllers/userControllers";
import { NextResponse } from "next/server";

export async function GET(Request) {
  const users = await indexUser()
  return NextResponse.json(users, {
    status: 200,
  })
}

export async function POST(Request) {
  const user = await createUser(Request)
  return NextResponse.json(user, {
    status: 200,
  })
}