import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/NotFound.jpg';

function NotFound(props) {
  return (

    <div style={{ border: '5px solid #FF8A00', borderRadius: '50px', }} className="container my-5 overflow-hidden">
      <div >
        <div className="modal-body text-center">
          <img src={NotFoundImage} className="img-fluid rounded" alt='ganbar404' width="300px" />
          <h1>Oopss..</h1>
          <h1>
            Kamu harus login untuk mengakses halaman ini
          </h1>
          <p>
            Yuk segera login untuk dapat mengakses fitur!!!
          </p>
        </div>
        <div className="border-0 d-flex justify-content-center mb-3">
          <Link to="/login" style={{ background: '#FF8A00', padding: '5px 33px', borderRadius: '30px', fontWeight: 600, fontSize: '18px', lineHeight: '22px', textAlign: 'center' }}>Login</Link>
        </div>
      </div>
    </div>


  );
}

export default NotFound;