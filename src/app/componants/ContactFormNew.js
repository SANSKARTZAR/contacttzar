"use client";

import { useState } from "react";
import { submitContact } from "../models/action"

const ContactFormNew = () => {

  const [status, setStatus] = useState();

  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact({
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        message: formData.get("message")
      })
      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
    <h1>changes/ new form</h1>
      <form
        action={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            className="h-32"
            id="message"
            name="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
export default ContactFormNew;