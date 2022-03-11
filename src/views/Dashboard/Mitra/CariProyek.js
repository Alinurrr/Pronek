import React from 'react';
import { Link } from 'react-router-dom';

function CariProyek(props) {
  return (
    <>
      {/* content */}
      <div style={{ width: '90%', paddingBottom: '34px' }} className="mx-auto">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 600, fontSize: '24px', marginBottom: '55px' }} className="text-center">Bagaimana Cara Mendapatkan
            Proyek?</h1>
          <div className="row">
            <div className="col-6 col-lg-3 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg mx-1" width={50} height={16} fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
              </svg>
              <button type="button" className="btn btnGuide">Lamar ke Proyek</button>
            </div>
            <div className="col-6 col-lg-3 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <button type="button" className="btn btnGuide">Diterima Pemilik Proyek</button>
            </div>
            <div className="col-6 col-lg-3 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <button type="button" className="btn btnGuide">Sepakati Kontrak Kerja</button>
            </div>
            <div className="col-6 col-lg-3 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <button type="button" className="btn btnGuide">Mulai Kerja</button>
            </div>
          </div>
          {/* border button */}
          <div className="position-relative d-flex w-full align-items-center mt-4">
            {/* border line */}
            <div style={{ borderBottom: '3px solid #FF8A00', width: '80%' }} className="top-50 start-50 translate-middle position-absolute">
            </div>
            {/* end border line */}
            <div className="btnBorder position-absolute top-50 start-50 translate-middle">
              atau
            </div>
          </div>
          {/* end border button */}
          <div className="row mt-5">
            <div className="col-6 col-lg-4 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg mx-1" width={50} height={16} fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
              </svg>
              <button type="button" className="btn btnGuide">Ambil Penawaran Proyek</button>
            </div>
            <div className="col-6 col-lg-4 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <button type="button" className="btn btnGuide">Sepakati Kontrak Kerja</button>
            </div>
            <div className="col-6 col-lg-4 mb-3 p-0 d-flex align-items-center justify-content-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} fill="currentColor" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <button type="button" className="btn btnGuide">Mulai Kerja</button>
            </div>
          </div>
        </div>
        {/* End Title */}
        {/* Form */}
        <div className="card" style={{ border: 'none', borderRadius: '60px', backgroundColor: '#FF8A00' }}>
          <div className="card-body ">
            <form style={{ maxWidth: '1000px', padding: '58px 0 34px' }} className="mx-auto">
              <div className="mb-3">
                <input placeholder="Masukkan Lokasi Pilihanmu" type="text" className="fomtInput " id="lokasi" />
              </div>
              <div className="mb-3">
                <input placeholder="Masukkan Posisi yang Dibutuhkan" type="text" className="fomtInput " id="posisi" />
              </div>
              <div className="mb-3">
                <input placeholder="Masukkan Keahliah yang Dibutuhkan" type="text" className="fomtInput " id="keahlian" />
              </div>
              <div className="row mx-5">
                <div className="col-6 d-grid px-0 mt-4">
                  <Link to="/dashboard/cari-proyek" style={{ backgroundColor: '#5C007C', borderRadius: '20px 0px 0px 20px', fontSize: '20px', fontWeight: 700, padding: '14px 0' }} type="submit" className="btn text-white text-center">Atur Ulang</Link>
                </div>
                <div className="col-6 d-grid px-0 mt-4">
                  <Link to="/dashboard/cari-proyek/hasil" style={{ backgroundColor: '#010032', borderRadius: '0px 20px 20px 0px', fontSize: '20px', fontWeight: 700, padding: '14px 0' }} type="submit" className="btn text-white text-center">Terapkan</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End Form */}
      </div>
      {/*end content */}

    </>
  );
}

export default CariProyek;