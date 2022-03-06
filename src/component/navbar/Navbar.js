import React from 'react';
import { NavLink } from 'react-router-dom';

import NavbarLogo from '../../assets/logo-brand1.png'


function Navbar(props) {


  const imgNavbar = {
    borderRadius: '0 50px  50px   0 '
  };

  const navLink = {
    fontSize: '18px',
    margin: '0 30px',
    padding: '0',
  };
  const btnAuth = {
    backgroundColor: '#FF8A00',
    fontSize: '21px'
  };

  return (
    <>
      <nav style={{ backgroundColor: '#010032' }} className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid ps-0 pe-4 py-2">
          <NavLink style={imgNavbar} to="/" className="navbar-brand bg-white">
            <img src={NavbarLogo} alt="Logo Pronek" className='mx-5 my-2' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <NavLink style={{fontWeight}} to="/" className="nav-link active" aria-current="page">Beranda</NavLink> */}
                <NavLink style={navLink} to="/" className="nav-link fw-bold" aria-current="page">Beranda</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/layanan" className="nav-link fw-bold" aria-current="page">Layanan</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/gabung-mitra" className="nav-link fw-bold" aria-current="page">Gabung Mitra</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/cari-jasa" className="nav-link fw-bold" aria-current="page">Cari Jasa</NavLink>
              </li>
            </ul>

            <NavLink style={btnAuth} to="/register" className="btn me-4 rounded-pill text-white fw-bold" >Sign up</NavLink>
            <NavLink style={btnAuth} to="/login" className="btn rounded-pill text-white fw-bold" >Log in</NavLink>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;