import React from 'react';
import { Link } from 'react-router-dom';


import BannerImage3 from './../../assets/image-banner3.png'

function GabungMitra(props) {


  const CardTitle = {
    fontSize: '24px',
    color: 'black'
  };
  const CardText = {
    fontSize: '18px'
  };

  return (
    <>
      <div className='mb-5' style={{ backgroundColor: 'white', fontFamily: 'Poppins' }}>
        <div className="container">
          <div className="row justify-content-center align-items-start">
            <div className="col-12 py-4 mt-2 text-center">
              <h3 style={{ fontWeight: '700', fontSize: '30px' }}>BERPROFESI SEBAGAI MANDOR / PEKERJA BANGUNAN ?</h3>
              <h3 style={{ fontWeight: '700', fontSize: '30px' }}>GABUNG BERSAMA KAMI !</h3>
            </div>

            <div className="col-12 col-lg-6 mb-3 px-4">
              <div style={{ borderRadius: '60px', border: '0' }} className="card bg-dark text-white ">
                <img src={BannerImage3} style={{ borderRadius: '40px' }} className="h-auto" alt="gambar" />
                <div className="container text-center mx-auto card-img-overlay d-flex justify-content-start align-items-center flex-column">
                  <h5 style={CardTitle} className="card-title fw-bolder text-white">Mitra Pronek</h5>
                </div>
              </div>
            </div>
            <p style={CardText} className="text-center mt-4 px-4">Banyak kemudahan yang Pronek berikan kepada mitra user, memberikan solusi menemukan proyek dan pekerja bangunan secara cepat dan efisien.</p>
            <div className="col-12 col-lg-6 d-grid gap-2 mt-4">
              <Link to="/register-mitra" style={{ backgroundColor: '#010032', borderRadius: '10px', fontSize: '21px', fontWeight: '800' }} type="submit" className="btn text-white text-center">Gabung Mitra</Link>
            </div>
          </div>
        </div>
      </div>
    </ >
  );
}

export default GabungMitra;