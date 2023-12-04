type StatusDisplayProps = {
  status: string
}

const StatusDisplay = ({ status }: StatusDisplayProps) => {
  let color = "bg-slate-700"

  switch (status) {
    case "not started":
      color = "bg-green-200"
      break
    case "started":
      color = "bg-yellow-200"
      break
    case "done":
      color = "bg-red-200"
      break
    default:
      color = "bg-slate-700"
      break
  }

  return (
    <span
      className={`${color} inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700`}
    >
      {status}
    </span>
  )
}
export default StatusDisplay
