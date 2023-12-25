import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faSquarePlus} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">test@email.com</p>
      </div>
    </nav>
  )
}

export default Nav
