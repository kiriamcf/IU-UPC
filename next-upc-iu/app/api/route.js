import { NextResponse } from 'next/server'

async function notAllowed(NextRequest) {
  return NextResponse.error("Method not allowed", { status: 405 })
}

const handlers = {

  GET: async (NextRequest) => {
    return NextResponse.json(
      { get: "get" },
      { status: 200 }
    )
  },

  POST: async (NextRequest) => {
    return NextResponse.json(
      { post: "post" },
      { status: 200 }
    )
  }

}

async function handler(NextRequest) {
  return await ((handlers[NextRequest.method.toUpperCase()] || notAllowed))(NextRequest);
}

export { handler as GET, handler as POST }