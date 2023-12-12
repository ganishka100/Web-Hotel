import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* -------------------Navbar------------------------- */}

      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:`#0A1172`, fontWeight:`400`}} href="/">Welcome,<span style={{color:`#0A1172`, fontWeight:`bold`}}> Ariana !</span><br/>
    <p className="text-black-50" style={{fontSize:`15px`}}>Don't forget to check your activity</p></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-5">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <i className="fa-solid fa-bell fs-4 mt-2"></i>
        </li>
        <li className="nav-item me-4">
          {/* <a className="nav-link" href="/">Features</a> */}
          <h5 style={{color:`#0A1172`, fontWeight:`500`}}>Anjayani abraam <br/>
          <p className="text-black-50" style={{fontSize:`15px`}}>Owner</p></h5>
        </li>
        <li className="nav-item me-4">
          {/* <a className="nav-link" href="/">Pricing</a> */}
          <img src="./Images/Jack.png" width="40px" className="rounded-circle" alt="upload-img"></img>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
