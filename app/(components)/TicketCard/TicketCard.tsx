// components
import Ticket from "@/app/(models)/Ticket"
import DeleteBlock from "./DeleteBlock/DeleteBlock"
import PriorityDisplay from "./PriorityDisplay/PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay/ProgressDisplay"
import StatusDisplay from "./StatusDisplay/StatusDisplay"
import React from "react"

// type
import { TicketCardProp } from "../../(types)"

const TicketCard = (ticket: TicketCardProp) => {
  return (
    <div className="ticket-card flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority as number} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col min-w-[200px] max-w-[80%]">
          <p className="text-xs my-1">{ticket.createdAt}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
