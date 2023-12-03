import TicketForm from "@/app/(components)/TicketForm/TicketForm"

type TicketPageProps = {
  params: {
    id: string
  }
}

const TicketPage: React.FC<TicketPageProps> = ({ params: { id } }) => {
  console.log("ticket page id", id)
  return <TicketForm />
}

export default TicketPage
