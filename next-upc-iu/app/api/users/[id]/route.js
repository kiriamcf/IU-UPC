import { NextResponse } from "next/server";
import { showUser } from "@/app/backend/controllers/userControllers";

export async function GET(Request, params) {
  const user = await showUser(params.id)
  return NextResponse.json(user, {
    status: 200,
  })
}