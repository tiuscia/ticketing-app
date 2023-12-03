"use client"

import { TicketSchemaType } from "@/app/(types)"
import { useRouter } from "next/router"
import React, { ChangeEvent, useState } from "react"

const TicketForm = () => {
  const defaultTicketData: TicketSchemaType = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "bug",
    active: true,
  }

  const [formData, setFormData] = useState<TicketSchemaType>(defaultTicketData)

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((preState: TicketSchemaType) => {
      return {
        ...preState,
        [name]: value,
      }
    })
  }

  const handleSubmit = () => {
    console.log("submitting form data")
  }

  return (
    <div className="ticket-form flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create a ticket</h3>
        <label>Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={formData.title as string}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          required
          value={formData.description as string}
          onChange={handleChange}
          rows={5}
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          value={formData.category as string}
          onChange={handleChange}
        >
          <option value="Bug">Bug</option>
          <option value="New Feature">New Feature</option>
        </select>
      </form>
    </div>
  )
}

export default TicketForm
