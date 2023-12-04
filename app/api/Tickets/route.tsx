import Ticket from "../../(models)/Ticket"
import { NextResponse } from "next/server"

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json()
    const ticketData = body.formData
    await Ticket.create(ticketData)

    return NextResponse.json(
      { message: "Next api: Ticket created" },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Next api: Ticket Error", error },
      { status: 500 }
    )
  }
}
