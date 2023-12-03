import DeleteBlock from "./DeleteBlock/DeleteBlock"
import PriorityDisplay from "./PriorityDisplay/PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay/ProgressDisplay"
import StatusDisplay from "./StatusDisplay/StatusDisplay"

const TicketCard = () => {
  return (
    <div className="ticket-card flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col min-w-[200px] max-w-[80%]">
          <p className="text-xs my-1">time</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
