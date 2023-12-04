import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"

type PriorityDisplayProps = {
  priority: number
}

const PriorityDisplay = ({ priority }: PriorityDisplayProps) => {
  return (
    <div className="flex justify-start align-baseline">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faFire}
          className={`pr-1 ${
            priority > index ? "text-red-400" : "text-slate-400"
          }`}
        />
      ))}
    </div>
  )
}

export default PriorityDisplay
