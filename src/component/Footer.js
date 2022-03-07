import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


function Footer(props) {
  return (
    <div>
      {/* Footer */}
      <footer style={{ background: 'rgba(1, 0, 50, 0.15)' }} className="text-center text-black">
        {/* Grid container */}
        <div className="container p-4">
          <section >
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}

              <div className="col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-start fw-bold">Hubungi Kami</h5>

                <div style={{ fontSize: '18px' }} className="d-flex flex-column align-items-start">
                  <div className="p-2">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-xl" style={{ width: '30px' }} />
                    <Link to="#!" className="text-black ms-4" style={{ textDecoration: 'none' }}>pronekindonesia@gmail.com</Link>
                  </div>
                  <div className="p-2">
                    <FontAwesomeIcon icon={faInstagramSquare} className="fa-xl" style={{ width: '30px' }} />
                    <Link to="#" onClick={() => { window.open('https://www.instagram.com/pronek.id/'); }} className="text-black ms-4" style={{ textDecoration: 'none' }}>pronek.id</Link>
                  </div>
                  <div className="p-2">
                    <FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" style={{ width: '30px' }} />
                    <Link to="#!" className="text-black ms-4" style={{ textDecoration: 'none' }}>PRONEK</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4 mb-md-0 text-end">
                <h5 className="text-uppercase fw-bold">Informasi Lainnya</h5>
                <div style={{ fontSize: '18px' }} className="d-flex flex-column align-items-end">
                  <div className="p-2">
                    <a href="#!" className="text-black" style={{ textDecoration: 'none' }}>Kebijakan Privasi</a>
                  </div>
                  <div className="p-2">
                    <a href="#!" className="text-black" style={{ textDecoration: 'none' }}>Syarat dan Ketentuan</a>
                  </div>
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3 text-white" style={{ backgroundColor: '#010032' }}>
          © 2022 Copyright Pronek
          <Link className="text-white ps-1 py-2 ms-2" to="/" style={{ textDecoration: 'none', borderLeft: '3px solid #FF8A00' }}>  Pronek merupakan start-up digital yang bergerak dibidang layanan jasa konstruksi</Link>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  );
}

export default Footer;