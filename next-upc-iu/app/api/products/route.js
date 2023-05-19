import { NextResponse } from "next/server";
import { indexProduct } from "@/app/backend/controllers/productControllers";

export async function GET(Request) {
  const products = await indexProduct()
    return NextResponse.json(products, {
    status: 200,
  })
}