import React from 'react';

function DashboardMitra(props) {
  return (
    <>

      <div className="container my-5">
        <div className="modal-content" style={{ borderRadius: '50px' }}>
          <div className="modal-body text-center">
            <h1>
              Selamat datang di Dashboard Pronek, John!
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis neque error dolorum nemo adipisci. Dignissimos, animi facere! Molestiae eaque nobis, esse veniam laborum consequatur ipsum voluptates, autem voluptatibus nam aspernatur?
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

export default DashboardMitra;