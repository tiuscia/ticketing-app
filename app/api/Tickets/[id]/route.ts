import Ticket from "@/app/(models)/Ticket"
import { NextResponse } from "next/server"

type ParamsIDType = {
  id: string
}

type paramsType = {
  params: ParamsIDType
}

export async function PUT(req: Request, { params }: paramsType) {
  try {
    const { id } = params
    const body = await req.json()
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    })

    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
}

export async function GET(req: Request, { params }: paramsType) {
  try {
    const { id } = params

    const ticket = await Ticket.findOne({ _id: id })
    return NextResponse.json({ ticket }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: paramsType) {
  try {
    const { id } = params

    await Ticket.findByIdAndDelete(id)
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error", error }, { status: 500 })
  }
}
