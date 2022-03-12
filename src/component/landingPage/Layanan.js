import React from 'react';

import BannerImage1 from './../../assets/image-banner1.png'
import BannerImage2 from './../../assets/image-banner2.png'

function Layanan(props) {

  const CardTitle = {
    fontSize: '24px',
    color: 'black'
  };
  const CardText = {
    fontSize: '18px',
    color: 'black'
  };

  return (
    <div>
      <div style={{ backgroundColor: '#FF8A00', fontFamily: 'Poppins' }}>
        <div className="container">
          <div className="row text-white justify-content-center align-items-start">
            <div className="col-12 py-4 text-center">
              <h3 style={{ fontWeight: '700', fontSize: '30px' }}>Layanan Kami</h3>
            </div>

            <div className="col-12 col-lg-5 mb-3 d-flex flex-column px-4">
              <div style={{ borderRadius: '60px', border: '0' }} className="card bg-dark text-white ">
                <img src={BannerImage1} className="h-auto" alt="gambar" />
                <div className="container text-center mx-auto card-img-overlay d-flex justify-content-end align-items-center flex-column">
                  <h5 style={CardTitle} className="card-title fw-bolder">Proyek Bangunan</h5>
                </div>
              </div>
              <p style={CardText} className="text-center mt-4 px-4">Membantumu menyelesaikan proyek bangunan baru dengan skala besar atau kecil bersama mitra Pronek secara profesional.</p>
            </div>

            <div className="col-12 col-lg-5 mb-3 d-flex flex-column px-4">
              <div style={{ borderRadius: '60px', border: '0' }} className="card bg-dark text-white ">
                <img src={BannerImage2} className="h-auto" alt="gambar" />
                <div className="container text-center mx-auto card-img-overlay d-flex justify-content-end align-items-center flex-column">
                  <h5 style={CardTitle} className="card-title fw-bolder">Proyek Renovasi</h5>
                </div>
              </div>
              <p style={CardText} className="text-center mt-4 px-4">Membantumu menyelesaikan proyek renovasi dengan skala besar atau kecil bersama mitra Proyek secara profesional.</p>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

export default Layanan;