"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

type EditBlock = {
  id: string
}

const EditBlock = ({ id }: EditBlock) => {
  return (
    <Link href={`/TicketPage/${id}`} style={{ display: "contents" }}>
      <FontAwesomeIcon icon={faPen} className="hover:cursor-pointer mr-2" />
    </Link>
  )
}

export default EditBlock
