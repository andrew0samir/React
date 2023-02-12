import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"

export default class Navbar extends Component {
  render() {
    return (
      <>

<nav className="navbar navbar-expand-lg navbar-dark color py-3 fixed-top">
  <div className="container-fluid">
    <Link className={`navbar-brand ${style.linkColor} font-weight-bold text-white px-5 fs-3`} to="" >START REACT</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto px-5 mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link className={`nav-link mx-3 ${style.linkColor}`} to="Portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mx-3 ${style.linkColor}`} to="About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mx-3 ${style.linkColor}`} to="Contact">CONTACT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



      </>
    )
  }
}
