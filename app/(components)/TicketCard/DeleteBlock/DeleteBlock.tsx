"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"

type DeleteBlockProp = {
  id: string
}

const DeleteBlock = ({ id }: DeleteBlockProp) => {
  const deteleTicket = async (id: string) => {
    const router = useRouter()

    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    })

    // if (res.ok) {
    //   router.reload()
    // }
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
