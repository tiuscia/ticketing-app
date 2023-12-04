export type TicketSchemaType = {
  title: String
  description: String
  category: String
  priority: Number
  progress: Number
  status: String
  active: Boolean
}

export type TicketCardProp = {
  _id: string
  title: string
  description: string
  category: string
  priority: number
  progress: number
  status: string
  active: boolean
  createdAt: string
  updatedAt: string
  __v: number
  // key: React.Key
}

export type FormatTimestampOptionType = {
  year: string
  month: string
  day: string
  hour: string
  minute: string
  hour12: boolean
}
