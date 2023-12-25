import TicketForm from "@/app/(components)/TicketForm/TicketForm"

// type
import { TicketCardProp } from "@/app/(types)"
import { TicketFormProp } from "@/app/(components)/TicketForm/TicketForm"

type TicketPageProps = {
  params: {
    id: string
  }
}

type UpdateTicketData = TicketFormProp

type FetchedTicket = { ticket?: TicketCardProp }

const getTicketById = async (id: string) => {
  try {
    const res: Response = await fetch(
      `http://localhost:3000/api/Tickets/${id}`,
      {
        cache: "no-store",
      }
    )
    if (!res.ok) throw new Error("Failed to get ticket (TicketCard)")
    return res.json()
  } catch (error) {
    console.log("Failed to get ticket (TicketCard)", error)
  }
}

const TicketPage: React.FC<TicketPageProps> = async ({
  params: { id },
}: TicketPageProps) => {
  const isEditMode = id !== "new"
  let updateTicketData: UpdateTicketData = { _id: "" }
  if (isEditMode) {
    let fetchedTicket: FetchedTicket = await getTicketById(id)
    updateTicketData = fetchedTicket?.ticket!
  } else {
    updateTicketData = { _id: "new" as string }
  }

  console.log("updateTicketData >>>>>>>", updateTicketData)

  return <TicketForm {...updateTicketData} />
}

export default TicketPage
