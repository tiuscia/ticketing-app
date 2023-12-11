"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

type DeleteBlockProp = {
  id: string
}

const DeleteBlock = ({ id }: DeleteBlockProp) => {
  const deteleTicket = async (id: string) => {
    const router = useRouter()
    try {
      const res: Response = await fetch(
        `http://localhost:3000/api/Tickets/${id}`,
        {
          method: "DELETE",
        }
      )

      if (res.ok) {
        console.log("DELETE: Promise resolved and HTTP status is successful")
        router.refresh()
      } else {
        // Custom message for failed HTTP codes
        if (res.status === 404) throw new Error("404, Not found")
        if (res.status === 500) throw new Error("500, internal server error")
        // For any other server error
        if (!res.ok) throw new Error(res.status.toString())
      }
    } catch (error) {
      console.error("Fetch", error)
    }
  }

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={() => deteleTicket(id)}
    />
  )
}

export default DeleteBlock
