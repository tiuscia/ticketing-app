import { ReactNode } from "react"
import TicketCard from "./(components)/TicketCard/TicketCard"
import { TicketCardProp } from "./(types)"

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    })
    return res.json()
  } catch (error) {
    console.log("Failed to get ticket (TicketCard)", error)
  }
}

export const Dashboard = async () => {
  const data = await getTickets()

  if (!data?.tickets) {
    return <p>No tickets.</p>
  }

  const tickets: TicketCardProp[] = data.tickets

  const uniqueCategories: string[] = [
    ...new Set(tickets.map(({ category }) => category) as string[]),
  ]

  const ticketsGroupedByCategory = (
    tickets: TicketCardProp[],
    category: string
  ): ReactNode => {
    console.log("tickets", tickets)
    const filteredTickets = tickets.filter(
      (ticket: TicketCardProp) => ticket.category === category
    )

    return (
      <>
        {filteredTickets.map(
          (filteredTicket: TicketCardProp, _index: number) => {
            return (
              <div key={_index}>
                <TicketCard {...filteredTicket} />
              </div>
            )
          }
        )}
      </>
    )
  }

  return (
    <div className="p-5">
      {tickets &&
        uniqueCategories &&
        uniqueCategories.map((currentCategory, indexCategory) => (
          <div key={indexCategory} className="mb-4">
            <h2>{currentCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {ticketsGroupedByCategory(tickets, currentCategory as string)}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard
