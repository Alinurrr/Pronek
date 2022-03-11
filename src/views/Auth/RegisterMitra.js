import React from 'react';
import { Link } from 'react-router-dom';

function RegisterMitra(props) {
  return (
    <>

      {/* content */}
      <div style={{ width: '90%', paddingBottom: '111px' }} className="mx-auto">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 800, fontSize: '32px' }} className="text-white">BUAT AKUN YUK!</h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 500, fontSize: '18px', color: '#455A64' }} className="me-1">Sudah punya akun ? </div>
            <Link style={{ fontWeight: 500, fontSize: '18px', color: '#4abbf0', textDecoration: 'none' }} to="/login">
              Login disini</Link>
          </div>
        </div>
        {/* End Title */}
        {/* login Form */}
        <div className="card" style={{ border: 'none', borderRadius: '60px', backgroundColor: '#FF8A00' }}>
          <div className="card-header  bg-white" style={{ borderRadius: '60px 60px 0 0', padding: 0, fontWeight: 700, fontSize: '26px', lineHeight: '39px', textAlign: 'center', color: '#000000' }}>
            <div className="row mx-auto w-full">
              <Link to="/register" className="col p-3" style={{ borderRight: '2px solid #FF8A00', textDecoration: 'none', color: '#455A64', fontWeight: 600 }}>
                CUSTOMER
              </Link>
              <Link href="/register-mitra" className="col p-3" style={{ borderLeft: '2px solid #FF8A00', textDecoration: 'none', color: 'black' }}>
                MITRA
              </Link>
            </div>
          </div>
          <div className="card-body ">
            <form style={{ maxWidth: '600px', padding: '58px 0 120px' }} className="mx-auto">
              <div className="mb-3">
                <label htmlFor="InputName" className="fomtTitle form-label">Nama Lengkap</label>
                <input placeholder="Lorem Ipsum Dolor Amet" type="text" className="form-control fomtInput" id="InputName" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputUsername" className="fomtTitle form-label">Username</label>
                <input placeholder="lorem" type="text" className="form-control fomtInput" id="InputUsername" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputEmail1" className="fomtTitle form-label">Email address</label>
                <input placeholder="lorem@ipsum.amet" type="email" className="form-control fomtInput" id="InputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputPhone" className="fomtTitle form-label">Nomor telepon (terbubung ke WA)</label>
                <input placeholder="081234567891" type="number" className="form-control fomtInput" id="InputPhone" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputPassword1" className="fomtTitle form-label">Password</label>
                <input type="password" className="form-control fomtInput" id="InputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputConfirmPassword1" className="fomtTitle form-label">Confirm Password</label>
                <input type="password" className="form-control fomtInput" id="InputConfirmPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="InputConfirmPassword1" className="fomtTitle form-label">Role</label>
                <div className="d-flex justify-content-betwen py-3" style={{ borderTop: '2px solid white' }}>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="formInputRadio form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label formInputRadioText" htmlFor="flexRadioDefault1">
                      Mandor
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="formInputRadio form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label formInputRadioText" htmlFor="flexRadioDefault2">
                      Pekerja
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="formInputRadio form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label className="form-check-label formInputRadioText" htmlFor="flexRadioDefault3">
                      Asistern
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="InputConfirmPassword1" className="fomtTitle form-label">
                  Keahlian (boleh pilih lebih dari satu)
                </label>
                <div className="py-3" style={{ borderTop: '2px solid white' }}>
                  <div className="row w-full">
                    <div className="col-6 p-1">
                      <div className="form-check me-3 d-flex align-items-center">
                        <input className="form-check-input formInputCheck" type="checkbox" defaultValue id="flexCheckChecked" />
                        <label className="form-check-label formInputRadioText" htmlFor="flexCheckChecked">
                          Tukang batu
                        </label>
                      </div>
                    </div>
                    <div className="col-6 p-1">
                      <div className="form-check me-3 d-flex align-items-center">
                        <input className="form-check-input formInputCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label formInputRadioText" htmlFor="flexCheckDefault">
                          Tukang plafon
                        </label>
                      </div>
                    </div>
                    <div className="col-6 p-1">
                      <div className="form-check me-3 d-flex align-items-center">
                        <input className="form-check-input formInputCheck" type="checkbox" defaultValue id="flexCheckChecked" />
                        <label className="form-check-label formInputRadioText" htmlFor="flexCheckChecked">
                          Tukang keramik
                        </label>
                      </div>
                    </div>
                    <div className="col-6 p-1">
                      <div className="form-check me-3 d-flex align-items-center">
                        <input className="form-check-input formInputCheck" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label formInputRadioText" htmlFor="flexCheckDefault">
                          Tukang cat
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-grid gap-2 mt-4">
                <Link to="/login" style={{ backgroundColor: '#010032', borderRadius: '20px', fontSize: '21px', fontWeight: 800, padding: '14px 0' }} type="submit" className="btn text-white text-center">Daftar</Link>
              </div></form>
          </div>
          {/* End login Form */}
        </div>
        {/*end content */}
      </div>


    </>
  );
}

export default RegisterMitra;