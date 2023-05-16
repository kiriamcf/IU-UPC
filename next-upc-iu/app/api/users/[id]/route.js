import { NextResponse } from "next/server";
import { showUser } from "@/app/backend/controllers/userControllers";

export async function GET(Request, { params, searchParams }) {
  const provider = Request.nextUrl.searchParams.get('provider')
  const user = await showUser(params.id, provider)
    return NextResponse.json(user, {
    status: 200,
  })
}