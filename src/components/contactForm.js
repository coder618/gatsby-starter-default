import * as React from "react"
import { Link } from "gatsby"

const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("/thank-you/"))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <div className="contact-form">
        <div className="content">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
