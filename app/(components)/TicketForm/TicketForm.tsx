"use client"

import { TicketSchemaType } from "@/app/(types)"
import { useRouter } from "next/navigation"
import React, { ChangeEvent, useState } from "react"

const TicketForm = () => {
  const router = useRouter()
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
  ): void => {
    const value = e.target.value
    const name = e.target.name

    setFormData((preState: TicketSchemaType) => {
      return {
        ...preState,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitting form data")
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("res", res)

    if (!res.ok) {
      throw new Error("Failed to create ticket")
    }

    router.refresh()
    router.push("/")
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
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress as number}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          name="status"
          value={formData.status as string}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn" value={"Create Ticket"} />
      </form>
    </div>
  )
}

export default TicketForm
