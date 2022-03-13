import React from 'react';
import { Link } from 'react-router-dom';

import IconHistoryFile from '../../../assets/icon/icon-history-file.svg'
function Proyek(props) {
  return (
    <>

      <div className="container">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 700, fontSize: '32px' }}>⚒️ Proyek Saya </h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 400, fontSize: '14px', maxWidth: '500px' }} className="me-1">Halaman ini berisi history dari setiap proyek yang kamu upload
              di website Pronek ini.</div>
          </div>
        </div>
        {/* End Title */}


        {/* table */}
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between mb-3'>
              <div style={{ fontWeight: '700', fontSize: '24px' }}>
                <img src={IconHistoryFile} alt="icon info" className='me-2' />
                History Proyek
              </div>

              <Link to="/dashboard/cust/proyek/buat-proyek" className="btnAuth btn me-4 rounded-pill text-white fw-bold d-flex align-items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                Tambah Proyek
              </Link>
            </div>
            {/* content */}
            <div className="mx-auto">
              {/* Table Area */}
              <div className="mx-auto">
                <table className="table text-white py-3 overflow-hidden" style={{ borderRadius: '50px', backgroundColor: '#010032' }}>
                  <thead className="text-center" style={{ background: '#5C007C', borderRadius: '50px 50px 0px 0px !important', overflow: 'hidden' }}>
                    <tr>
                      <th>
                        <div className="my-3">Nama Proyek</div>
                      </th>
                      <th>
                        <div className="my-3">Lokasi</div>
                      </th>
                      <th>
                        <div className="my-3">Waktu</div>
                      </th>
                      <th>
                        <div className="my-3">Waktu Daftar</div>
                      </th>
                      <th>
                        <div className="my-3">Aksi</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center" style={{ height: '300px' }}>


                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Amazon</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">6 Bulan</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">1 - April 2022</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <Link to="/dashboard/cust/proyek/detail" type="button" className="btnTable">Detail</Link>
                        </div>
                      </td>
                    </tr>



                  </tbody>
                </table>
              </div>
              {/* End Table Area */}
            </div>
            {/*end content */}
          </div>

          {/* end table */}
        </div>


      </div>

    </>
  );
}

export default Proyek;