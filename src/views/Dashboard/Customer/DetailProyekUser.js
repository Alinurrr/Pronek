import React from 'react';
import ImageProyek from '../../../assets/fotoproyek.png'

import IconInfo from '../../../assets/icon/info.svg'
import IconPelamar1 from '../../../assets/icon/icon-pelamar1.svg'
import IconPelamar2 from '../../../assets/icon/icon-pelamar2.svg'
import { Link } from 'react-router-dom';

function DetailProyekUser(props) {
  return (
    <>
      <div className="container">

        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 700, fontSize: '32px' }}>⚒️ Nama Proyek Kamu </h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 400, fontSize: '14px', maxWidth: '500px' }} className="me-1">Halaman ini berisi hasil submit dari proyek yang kamu upload.
              Berisi tabel detail proyek, pelamar proyek, dan pekerja yang kamu pilih.</div>
          </div>
        </div>
        {/* End Title */}

        <div className="my-5">
          <div className="row">
            <div style={{ fontWeight: '700', fontSize: '24px', marginBottom: '14px' }}>
              <img src={IconInfo} alt="icon info" className='me-2' />
              Detail Proyek
            </div>
            <div className="col-12 col-xl-6 mb-3 d-flex justify-content-center">
              <img src={ImageProyek} alt="foto proyek" className="img-fluid" style={{ borderRadius: '50px' }} />
            </div>
            <div className="col-12 col-xl-6 mb-3">
              {/* login Form */}
              <div className="card mx-3 overflow-hidden" style={{ border: '3px solid #5C007C', boxSizing: 'border-box', borderRadius: '50px', backgroundColor: 'white' }}>
                <div className="card-header d-flex justify-content-center text-white" style={{ background: '#5C007C', padding: '15px 0', fontWeight: 700, fontSize: '18px', lineHeight: '22px', textAlign: 'center', color: '#000000' }}>
                  Detail Proyek
                </div>
                <div className="card-body ">
                  <h6 className="fw-bold">Nama Proyek</h6>
                  <p>
                    Lorem, ipsum dolor amet
                  </p>
                  <h6 className="fw-bold">Kebutuhan Pekerja</h6>
                  <div className='d-flex justify-content-betwen'>
                    <p className='me-2'>
                      <span className='fw-bold'>Mandor : </span> 1 orang
                    </p>
                    <p className='me-2'>
                      <span className='fw-bold'>Pekerja : </span> 5 orang
                    </p>
                    <p className='me-2'>
                      <span className='fw-bold'>Asisten : </span> 3 orang
                    </p>
                  </div>
                  <h6 className="fw-bold">Deskripsi Proyek</h6>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium, nam nihil vero
                    voluptatum
                    odit dolorem, harum corrupti rem voluptatibus optio in perferendis minus numquam sequi possimus,
                    molestiae
                    ipsam maxime.
                  </p>
                  <h6 className="fw-bold">Janga Waktu</h6>
                  <p>
                    Jumat, 11 Maret 2022 - Rabu, 5 April 2023
                  </p>
                </div>
              </div>
              {/* End login Form */}
            </div>
          </div>
        </div>

        {/* table */}
        <div className="row">
          <div className="col-12 col-lg-6">
            <div style={{ fontWeight: '700', fontSize: '24px', marginBottom: '14px' }}>
              <img src={IconPelamar1} alt="icon info" className='me-2' />
              Pelamar
            </div>
            {/* content */}
            <div className="mx-auto">
              {/* Table Area */}
              <div className="mx-auto">
                <table className="table text-white py-3 overflow-hidden" style={{ borderRadius: '50px', backgroundColor: '#010032' }}>
                  <thead className="text-center" style={{ background: '#5C007C', borderRadius: '50px 50px 0px 0px !important', overflow: 'hidden' }}>
                    <tr>
                      <th>
                        <div className="my-3">Posisi</div>
                      </th>
                      <th>
                        <div className="my-3">Nama</div>
                      </th>
                      <th>
                        <div className="my-3">Lokasi</div>
                      </th>
                      <th>
                        <div className="my-3">Keahlian</div>
                      </th>
                      <th>
                        <div className="my-3">Aksi</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center" style={{ height: '300px' }}>

                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="2" className="borderTable">
                        <div className="py-3">Mandor</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">John</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Genuk, Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat, Tukang Batu</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Rekrut</button>
                        </div>
                      </td>
                    </tr>


                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="3" className="borderTable">
                        <div className="py-3">Pekerja</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">leda35</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Ngaliyan, Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat, Tukang Batu</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Rekrut</button>
                        </div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Ojohns</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Banyumanik, Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat, Tukang Semen</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Rekrut</button>
                        </div>
                      </td>
                    </tr>

                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="3" className="borderTable">
                        <div className="py-3">Asisten</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td colSpan="4" className="borderTable">
                        <div className="py-3">-- Belum ada yang melamar posisi ini --</div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              {/* End Table Area */}
            </div>
            {/*end content */}
          </div>
          <div className="col-12 col-lg-6">
            <div style={{ fontWeight: '700', fontSize: '24px', marginBottom: '14px' }}>
              <img src={IconPelamar2} alt="icon info" className='me-2' />
              Pelamar Diterima
            </div>
            {/* content */}
            <div className="mx-auto">
              {/* Table Area */}
              <div className="mx-auto">
                <table className="table text-white py-3 overflow-hidden" style={{ borderRadius: '50px', backgroundColor: '#010032' }}>
                  <thead className="text-center" style={{ background: '#5C007C', borderRadius: '50px 50px 0px 0px !important', overflow: 'hidden' }}>
                    <tr>
                      <th>
                        <div className="my-3">Posisi</div>
                      </th>
                      <th>
                        <div className="my-3">Nama</div>
                      </th>
                      <th>
                        <div className="my-3">Lokasi</div>
                      </th>
                      <th>
                        <div className="my-3">Keahlian</div>
                      </th>
                      <th>
                        <div className="my-3">Aksi</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center" style={{ height: '300px' }}>

                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="2" className="borderTable">
                        <div className="py-3">Mandor</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td colSpan="4" className="borderTable">
                        <div className="py-3">-- Belum ada pekerja di posisi ini --</div>
                        <div className="py-3">Ayo segera rekrut / <Link to="/dashboard/cust/cari-jasa">Cari pekerja lain</Link></div>
                      </td>
                    </tr>


                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="2" className="borderTable">
                        <div className="py-3">Pekerja</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">leda35</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Ngaliyan, Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat, Tukang Batu</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                        </div>
                      </td>
                    </tr>

                    {/* fof role mitra */}
                    <tr>
                      <td rowSpan="2" className="borderTable">
                        <div className="py-3">Asisten</div>
                      </td>
                    </tr>

                    {/* data mitra */}
                    <tr>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">John</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Genuk, Semarang</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat, Tukang Batu</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
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
        </div>
        {/* end table */}
      </div>

    </>
  );
}

export default DetailProyekUser;