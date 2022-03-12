import React from 'react';

function DashboardCust(props) {
  return (
    <>

      <div className="container my-5">
        <div className="modal-content" style={{ borderRadius: '50px' }}>
          <div className="modal-body text-center">
            <h1>
              Selamat datang di Dashboard Pronek, John!
            </h1>
            <p>
              Ini halaman dashboard khusus Customer !!!
            </p>
          </div>
          <div className="border-0 d-flex justify-content-center mb-3">
            <div style={{ background: 'transparent', fontSize: '32px', textAlign: 'center' }} className="mx-2" >
              ⚠️
            </div>
            <div style={{ background: 'transparent', fontSize: '32px', textAlign: 'center' }} className="mx-2" >
              🦺
            </div>
            <div style={{ background: 'transparent', fontSize: '32px', textAlign: 'center' }} className="mx-2" >
              🛠️
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default DashboardCust;