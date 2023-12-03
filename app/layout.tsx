import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

// components
import Nav from "./(components)/Nav/Nav"

// fixed icons size
config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ticket App",
  description: "Adding TypeScript to the Next.js ticket app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
