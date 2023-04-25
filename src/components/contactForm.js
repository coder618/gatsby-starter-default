import * as React from "react"
// import { Link } from "gatsby"
import { useState } from "react"

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(false)
        setResponseMessage("We Have received your message")
      })
      .catch(error => {
        setSubmitted(false)
        setResponseMessage(
          "Something is wrong please contact us at testing@gmail.com "
        )
      })
  }
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact-form">
        <div className="content">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className={submitted ? "form-group" : "d-none"}>
            <div className="alert">{responseMessage}</div>
          </div>

          <div className="form-group">
            <button
              disabled={submitted}
              type="submit"
              className="btn btn-primary"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
