"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
]


  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Khushi Bansal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navigation.map((item) => (
            <li className="nav-item" key={item.name}>
              <a
                className={`nav-link ${location.hash === `#${item.path.slice(1)}` ? "active" : ""}`}
                href={`#${item.path.slice(1)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
