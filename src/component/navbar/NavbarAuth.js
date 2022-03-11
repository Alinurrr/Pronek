import React from 'react';
import { NavLink } from 'react-router-dom';

import NavbarLogo from '../../assets/logo-brand1.png'
import BorderOrangeLine from '../BorderOrangeLine';


function NavbarAuth(props) {

  return (
    <>

      {/*Navbar*/}
      <nav className=" navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid ps-0 pe-4 py-2">

          <NavLink exact style={{ borderRadius: '0 50px  50px   0' }} to="/" className="navbar-brand bg-white">
            <img src={NavbarLogo} alt="Logo Pronek" className="mx-5 my-2" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <NavLink exact to="/" className="navLink active nav-link fw-bold" aria-current="page">Beranda</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/persyaratan" className="navLink active nav-link fw-bold" aria-current="page">Persyaratan</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/kebijakan-privasi" className="navLink active nav-link fw-bold" aria-current="page">Kebijakan Privasi</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*End Navbar*/}

      <BorderOrangeLine />


    </>
  );
}

export default NavbarAuth;