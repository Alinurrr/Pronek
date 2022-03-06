import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './../style/Beranda.css'

import HeroImage from './../assets/image-hero1.png'
import Logo from './../assets/logo-brand2.png'


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

        <div className='container d-flex flex-column justify-content-center mx-auto mt-5 align-items-center'>
          <img src={Logo} style={{ width: '141px' }} className="" alt="Logo Pronek" />
          <h5 style={{ fontSize: '18px' }} className="my-4 card-title text-center">Pronek merupakan platform digital penyedia jasa layanan konstruksi yang menghubungkan profesi pekerja bangunan dengan masyarakat sebagai user. Bersama Pronek selesaikan proyek bangunanmu dengan cepat, tepat dan akurat dalam satu layanan.</h5>
        </div>


      </div>


    </>
  );
}

export default Beranda;