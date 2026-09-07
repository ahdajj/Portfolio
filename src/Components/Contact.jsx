import { useState } from 'react'
import { IconArrowUpRight, IconMail, IconMapPin } from '@tabler/icons-react'
import './ContactStyle.css'

export default function Contact() {
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="Contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p className="contact-eyebrow">Let&apos;s work together</p>
        <h2 id="contact-title">Have a project in mind?</h2>
        <p className="contact-description">
          Tell me a little about what you are building and I&apos;ll get back to you soon.
        </p>
        <div className="contact-details">
          <a href="mailto:hello@example.com" className="contact-detail">
            <IconMail size={20} aria-hidden="true" />
            <span>hello@example.com</span>
          </a>
          <div className="contact-detail">
            <IconMapPin size={20} aria-hidden="true" />
            <span>Available worldwide</span>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field-row">
          <label className="contact-field">
            <span>First name</span>
            <input type="text" name="firstName" placeholder="Ahmad" required />
          </label>
          <label className="contact-field">
            <span>Last name</span>
            <input type="text" name="lastName" placeholder="Ajjawe" required />
          </label>
        </div>
        <div className="contact-field-row">
          <label className="contact-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label className="contact-field">
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="+31 6 12345678" />
          </label>
        </div>
        <label className="contact-field">
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
        </label>
        <div className="contact-form-footer">
          <span className={`contact-status ${isSent ? 'is-visible' : ''}`} role="status">
            Thanks, your message is ready to send.
          </span>
          <button type="submit" className="contact-submit">
            Send message
            <IconArrowUpRight size={19} aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  )
}