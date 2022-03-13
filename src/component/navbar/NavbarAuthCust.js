import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import NavbarLogo from '../../assets/logo-brand1.png'

import { authenticated } from '../../store';
import UserDropdown from '../UserDropdown';


function NavbarAuthCust(props) {

  const auth = useRecoilValue(authenticated)

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
              <li className="nav-item">
                <NavLink to="/dashboard/profile" className="navLink nav-link fw-bold" aria-current="page">Profile Saya</NavLink>
              </li>
            </ul>
            {
              auth.check &&
              <UserDropdown userContent={{ TextColor: "text-white" }} />
            }
          </div>
        </div>
      </nav>
      {/*End Navbar*/}



    </>
  );
}

export default NavbarAuthCust;