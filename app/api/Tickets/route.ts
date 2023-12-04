import { TicketSchemaType } from "@/app/(types)"
import Ticket from "../../(models)/Ticket"
import { NextResponse } from "next/server"

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json()
    console.log("body.formData", body.formData)
    const ticketData: TicketSchemaType = body.formData
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

export async function GET(): Promise<NextResponse> {
  try {
    const tickets: TicketSchemaType[] = await Ticket.find()
    return NextResponse.json({ tickets }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Next api: Ticket Error", error },
      { status: 500 }
    )
  }
}
