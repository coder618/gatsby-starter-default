import * as React from "react"
import { Link } from "gatsby"

const ContactForm = ({ siteTitle }) => (
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
        <button className="btn btn-primary">CONTACT US</button>
      </div>
    </div>
  </div>
)
export default ContactForm
