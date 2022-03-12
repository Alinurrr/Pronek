import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import NavbarLogo from '../../assets/logo-brand1.png'

import PhotoPerson from '../../assets/person1.png'


function NavbarAuth2(props) {

  return (
    <>

      {/*Navbar*/}
      <nav style={{ backgroundColor: '#010032' }} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid ps-0 pe-4 py-2">
          <NavLink style={{ borderRadius: '0 50px  50px   0' }} to="/" className="navbar-brand bg-white">
            <img src={NavbarLogo} alt="Logo Pronek" className="mx-5 my-2" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <NavLink exact to="/dashboard/cust" className="navLink nav-link fw-bold" aria-current="page">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard/cust/proyek" className="navLink nav-link fw-bold" aria-current="page">Proyek Saya</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cari-jasa" className="navLink nav-link fw-bold" aria-current="page">Cari Jasa</NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <div className="dropdown">
                <button style={{ borderLeft: '3px solid white' }} className="btn text-white dropdown-toggle rounded-0 ps-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  rvndr23
                  <img src={PhotoPerson} alt="foto mitra" className="mx-3 rounded-circle" style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: 'full' }} />
                </button>
                <ul className=" dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link exact className="dropdown-item" to="/dashboard/profile">Profile</Link></li>
                  <li><Link exact className="dropdown-item" to="/">Log out</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*End Navbar*/}



    </>
  );
}

export default NavbarAuth2;