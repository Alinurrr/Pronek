import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './../style/Beranda.css'

import HeroImage from './../assets/image-hero1.png'


function Beranda(props) {

  return (
    <>

      <div style={{ fontFamily: 'Montserrat' }}>


        <div style={{ borderRadius: '0' }} className="card bg-dark text-white ">
          <img src={HeroImage} style={{ minHeight: '578.93px', objectFit: 'cover' }} className="" alt="gambar" />
          <div className="mb-3 w-75 text-center mx-auto card-img-overlay d-flex justify-content-center align-items-end">
            <h5 style={{ fontSize: '36px' }} className="card-title fw-bolder">SOLUSI TEPAT SELESAIKAN PROYEK BERSAMA MITRA PRONEK</h5>
          </div>
        </div>


      </div>


    </>
  );
}

export default Beranda;