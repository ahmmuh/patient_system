import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-5 py-2">
      <Link className="navbar-brand" to="/">Kvalitetsregister </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Hem</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cancerAnmalan">Canceranmälan</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar