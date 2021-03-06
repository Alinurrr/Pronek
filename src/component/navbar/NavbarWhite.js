import React from 'react';
import { NavLink } from 'react-router-dom';

import NavbarLogo from '../../assets/logo-brand1.png'
import BorderOrangeLine from '../BorderOrangeLine';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../../store';
import UserDropdown from '../UserDropdown';

function NavbarWhite(props) {

  const auth = useRecoilValue(authenticated)

  const imgNavbar = {
    borderRadius: '0 50px  50px   0 '
  };

  const navLink = {
    fontSize: '18px',
    margin: '0 30px',
    padding: '12px 0',
  };
  const btnAuth = {
    backgroundColor: '#FF8A00',
    fontSize: '21px'
  };

  return (
    <>
      <nav style={{ backgroundColor: 'white', fontFamily: 'Poppins' }} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid ps-0 pe-4 py-2">
          <NavLink style={imgNavbar} to="/" className="navbar-brand bg-white">
            <img src={NavbarLogo} alt="Logo Pronek" className='mx-5 my-2' />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                {/* <NavLink style={{fontWeight}} to="/" className="nav-link active" aria-current="page">Beranda</NavLink> */}
                <NavLink style={navLink} exact to="/" className="nav-link fw-bold" aria-current="page">Beranda</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/buat-proyek" className="nav-link fw-bold" aria-current="page">Buat Proyek</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/gabung-mitra" className="nav-link fw-bold" aria-current="page">Gabung Mitra</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={navLink} to="/cari-jasa" className="nav-link fw-bold" aria-current="page">Cari Jasa</NavLink>
              </li>
            </ul>

            {
              auth.check ?
                <UserDropdown userContent={{ TextColor: "text-dark" }} />
                :
                <div className='d-flex justify-content-center'>
                  <Link style={btnAuth} to="/register" className="btn me-4 rounded-pill text-white fw-bold" >Sign up</Link>
                  <Link style={btnAuth} to="/login" className="btn rounded-pill text-white fw-bold" >Log in</Link>
                </div>
            }
          </div>
        </div>
      </nav>
      <BorderOrangeLine />
    </>
  );
}

export default NavbarWhite;