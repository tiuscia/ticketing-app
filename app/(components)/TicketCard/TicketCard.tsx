import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

// components
import DeleteBlock from "./DeleteBlock/DeleteBlock"
import EditBlock from "./EditBlock/EditBlock"
import PriorityDisplay from "./PriorityDisplay/PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay/ProgressDisplay"
import StatusDisplay from "./StatusDisplay/StatusDisplay"

// type
import { TicketCardProp, FormatTimestampOptionType } from "../../(types)"
import { Content } from "next/font/google"

const TicketCard = (ticket: TicketCardProp) => {
  function formatTimestamp(timestamp: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }

    const date = new Date(timestamp)
    const formattedDate: string = date.toLocaleString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    )

    return formattedDate
  }

  return (
    <div className="ticket-card flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority as number} />
        <div className="ml-auto">
          <EditBlock id={ticket._id} />
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col min-w-[200px] max-w-[80%]">
            <p className="text-xs my-1">
              {formatTimestamp(ticket.createdAt as string)}
            </p>
            <ProgressDisplay progress={ticket.progress as number} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status as string} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard
