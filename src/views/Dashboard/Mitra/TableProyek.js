import React from 'react';
import ImageProyek from '../../../assets/fotoproyek.png'

function TableProyek(props) {
  return (
    <>

      {/* content */}
      <div style={{ width: '90%', paddingBottom: '80px', marginTop: '72px' }} className="mx-auto">
        {/* Table Area */}
        <div style={{ maxWidth: '1349px' }} className="mx-auto">

          {/* Title */}
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{ fontWeight: 700, fontSize: '32px' }}>⚒️ Cari Proyek </h1>
            <div className="d-flex align-items-center">
              <div style={{ fontWeight: 400, fontSize: '14px', maxWidth: '500px' }} className="me-1">Cari berbagai macam proyek yang tersedia dari Semarang dan Yogyakarta.
                Tertarik? Klik lamar aja!</div>
            </div>
          </div>
          {/* End Title */}

          <table className="table text-white py-3 overflow-hidden" style={{ borderRadius: '50px', backgroundColor: '#010032' }}>
            <thead className="text-center" style={{ background: '#5C007C', borderRadius: '50px 50px 0px 0px !important', overflow: 'hidden' }}>
              <tr>
                <th style={{ maxWidth: '300px' }}>
                  <div className="my-3">Lokasi</div>
                </th>
                <th style={{ maxWidth: '300px' }}>
                  <div className="my-3">Posisi</div>
                </th>
                <th style={{ maxWidth: '300px' }}>
                  <div className="my-3">Keahlian</div>
                </th>
                <th style={{ maxWidth: '300px' }}>
                  <div className="my-3">Aksi</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center" style={{ height: '300px' }}>
              <tr>
                <td className="borderTable">
                  <div className="py-3">Semarang</div>
                </td>
                <td className="borderTable">
                  <div className="py-3">Pekerja</div>
                </td>
                <td style={{ maxWidth: '70px' }} className="borderTable">
                  <div className="py-3">Pekerja Cat</div>
                </td>
                <td style={{ maxWidth: '70px' }}>
                  <div className="my-3 d-flex justify-content-center flex-wrap">
                    <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Lamar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="borderTable">
                  <div className="py-3">Yogyakarta</div>
                </td>
                <td className="borderTable">
                  <div className="py-3">Pekerja</div>
                </td>
                <td style={{ maxWidth: '100px' }} className="borderTable">
                  <div className="py-3">Pekerja Pasang Keramik</div>
                </td>
                <td style={{ maxWidth: '70px' }}>
                  <div className="my-3 d-flex justify-content-center flex-wrap">
                    <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Lamar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="borderTable">
                  <div className="py-3">Semarang</div>
                </td>
                <td className="borderTable">
                  <div className="py-3">Pekerja</div>
                </td>
                <td style={{ maxWidth: '70px' }} className="borderTable">
                  <div className="py-3">Pekerja Cat</div>
                </td>
                <td style={{ maxWidth: '70px' }}>
                  <div className="my-3 d-flex justify-content-center flex-wrap">
                    <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Lamar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Table Area */}
      </div>
      {/*end content */}



      <div>
        {/* Modal Detail Proyek*/}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content" style={{ borderRadius: '50px' }}>
              <div className="modal-header border-0">
                <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-5">
                <div className="row">
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
            </div>
          </div>
        </div>
        {/* Modal Lamaran Terkirim*/}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: '50px' }}>
              <div className="modal-body text-center">
                <h1>
                  Lamaranmu Terkirim
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque eaque rem quisquam ex obcaecati
                  aspernatur blanditiis enim nemo voluptates accusantium neque, vitae dicta quae voluptatibus in perferendis
                  laborum reiciendis.
                </p>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-center">
                <button style={{ background: '#FF8A00', padding: '5px 33px', borderRadius: '30px', fontWeight: 600, fontSize: '18px', lineHeight: '22px', textAlign: 'center' }} type="button" data-bs-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default TableProyek;