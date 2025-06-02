"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_1thyi9h",
        "template_dhbgq47",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "kzb-zO5XnSZlyCUj6",
      )

      setAlertType("success")
      setAlertMessage("Message sent successfully! I'll get back to you soon.")
      setShowAlert(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setAlertType("danger")
      setAlertMessage("Failed to send message. Please try again.")
      setShowAlert(true)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setShowAlert(false), 5000)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-5">Contact Me</h1>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm fade-in-up">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Get in Touch</h5>
              </div>
              <div className="card-body">
                <p className="text-muted mb-4">Feel free to reach out to me for any inquiries or opportunities.</p>

                <div className="contact-info">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-envelope text-primary me-3"></i>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      <a href="mailto:khushibansal635@gmail.com" className="text-decoration-none">
                        khushibansal635@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-phone text-primary me-3"></i>
                    <div>
                      <small className="text-muted d-block">Phone</small>
                      <a href="tel:+918302816373" className="text-decoration-none">
                        +91 8302816373
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-3"></i>
                    <div>
                      <small className="text-muted d-block">Location</small>
                      <span>Bhiwadi, Rajasthan</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <i className="fab fa-linkedin text-primary me-3"></i>
                    <div>
                      <small className="text-muted d-block">LinkedIn</small>
                      <a
                        href="https://www.linkedin.com/in/khushi-bansal-865170243/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        khushi-bansal-865170243
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fab fa-github text-primary me-3"></i>
                    <div>
                      <small className="text-muted d-block">GitHub</small>
                      <a
                        href="https://github.com/khushibansal11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        khushibansal11
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm fade-in-up">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Send a Message</h5>
              </div>
              <div className="card-body">
                {showAlert && (
                  <div className={`alert alert-${alertType} mb-3`} role="alert">
                    {alertMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
