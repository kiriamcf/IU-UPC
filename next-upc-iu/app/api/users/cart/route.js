import { addCartUser } from "@/app/backend/controllers/userControllers";
import { NextResponse } from "next/server";

export async function POST(Request) {
  const user = await addCartUser(Request)
  return NextResponse.json(user, {
    status: 200,
  })
}