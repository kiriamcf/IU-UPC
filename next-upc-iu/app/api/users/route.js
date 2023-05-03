import { indexUser, showUser, createUser, updateUser, deleteUser } from "@/app/backend/controllers/userControllers";
import { NextResponse } from "next/server";

export async function GET(Request,) {
  const users = await indexUser()
  return NextResponse.json(users, {
    status: 200,
  })
}

export async function POST(Request) {
  const { searchParams } = new URL(request.url);
  return NextResponse.json({ product })
}