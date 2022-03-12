import React from 'react';
import { Link } from 'react-router-dom';

import IconHistoryFile from '../../../assets/icon/icon-history-file.svg'
import IconSuccess from '../../../assets/icon/icon-success.svg'
import IconCancel from '../../../assets/icon/icon-cancel.svg'
import IconPendding from '../../../assets/icon/icon-pendding.svg'
function ProyekMitra(props) {
  return (
    <>

      <div className="container">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 700, fontSize: '32px' }}>⚒️ Proyek Saya </h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 400, fontSize: '14px', maxWidth: '500px' }} className="me-1">Halaman ini berisi history dari setiap proyek yang kamu daftarkan
              di website Pronek ini.</div>
          </div>
        </div>
        {/* End Title */}


        {/* table */}
        <div className="row">
          <div className="col-12">
            <div style={{ fontWeight: '700', fontSize: '24px', marginBottom: '14px' }}>
              <img src={IconHistoryFile} alt="icon info" className='me-2' />
              History Proyek
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
                        <div className="my-3">Status</div>
                      </th>
                      <th>
                        <div className="my-3">Aksi</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center" style={{ height: '300px' }}>
                    {/* data table */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Twitter</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">12 Bulan</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">
                          <img src={IconPendding} alt="icon info" className='me-2' />
                        </div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <Link to="/dashboard/cust/proyek/detail" type="button" className="btnTable">Detail</Link>
                        </div>
                      </td>
                    </tr>
                    {/* data table */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Facebook</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">6 Bulan</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">
                          <img src={IconCancel} alt="icon info" className='me-2' />
                        </div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <Link to="/dashboard/cust/proyek/detail" type="button" className="btnTable">Detail</Link>
                        </div>
                      </td>
                    </tr>
                    {/* data table */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Amazon</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">9 Bulan</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">
                          <img src={IconSuccess} alt="icon info" className='me-2' />
                        </div>
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

export default ProyekMitra;