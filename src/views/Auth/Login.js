import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <>

      {/* content */}
      <div style={{ width: '90%', paddingBottom: '111px' }} className="mx-auto">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 800, fontSize: '32px' }} className="text-white">WELCOME BACK!</h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 500, fontSize: '18px', color: '#455A64' }} className="me-1">Belum punya akun ? </div>
            <Link style={{ fontWeight: 500, fontSize: '18px', color: '#4abbf0', textDecoration: 'none' }} to="/register">
              Register disini</Link>
          </div>
        </div>
        {/* End Title */}
        {/* login Form */}
        <div className="card" style={{ border: 'none', borderRadius: '60px', backgroundColor: '#FF8A00' }}>
          <div className="card-header d-flex justify-content-center bg-white" style={{ borderRadius: '60px 60px 0 0', padding: '25px 0 18px', fontWeight: 700, fontSize: '26px', lineHeight: '39px', textAlign: 'center', color: '#000000' }}>
            LOG IN
          </div>
          <div className="card-body ">
            <form style={{ maxWidth: '600px', padding: '58px 0 120px' }} className="mx-auto">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="fomtTitle form-label">Email address</label>
                <input type="email" className="form-control fomtInput" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="fomtTitle form-label">Password</label>
                <input type="password" className="form-control fomtInput" id="exampleInputPassword1" />
              </div>
              <div className="col-12 d-grid gap-2 mt-4">
                <a href="/dashboard/mitra" style={{ backgroundColor: '#010032', borderRadius: '20px', fontSize: '21px', fontWeight: 800, padding: '14px 0' }} type="submit" className="btn text-white text-center">Login</a>
              </div></form>
          </div>
          {/* End login Form */}
        </div>
        {/*end content */}
      </div>



    </>
  );
}

export default Login;