import Ticket from "@/app/(models)/Ticket"
import { NextResponse } from "next/server"

type ParamsIDType = {
  id: string
}

type paramsType = {
  params: ParamsIDType
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
