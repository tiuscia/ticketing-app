import mongoose, { Schema, model } from "mongoose"
import { TicketSchemaType } from "../(types)"

mongoose.connect(process.env.MONGODB_URI as string).catch((err) => {
  console.log("Mongoose initial connection error: " + err)
})
// mongoose.Promise = global.Promise as typeof Promise

// error after initial connection
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err)
})

// Create a Schema corresponding to the document interface
const ticketSchema = new Schema<TicketSchemaType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    priority: { type: Number, required: true },
    progress: { type: Number, required: true },
    status: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

// Create a Model
const Ticket =
  mongoose.models.Ticket || model<TicketSchemaType>("Ticket", ticketSchema)

export default Ticket
