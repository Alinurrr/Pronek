import React from 'react';
import PhotoPerson from './../assets/person1.png'

function TableJasa(props) {
  return (
    <>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-4 mb-3">
            <div className="card overflow-hidden px-4" style={{ border: '3px solid #FF8A00', boxSizing: 'border-box', borderRadius: '50px', backgroundColor: 'white' }}>
              <div className="card-header d-flex justify-content-start " style={{ background: 'white', padding: '15px 0', fontWeight: 700, fontSize: '18px', lineHeight: '22px', textAlign: 'center', color: '#000000' }}>
                Filter
              </div>
              <div className="card-body ">
                <h6 className="fw-bold">Lokasi</h6>
                <div className="mb-3">
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="lokasi" id="lokasi" defaultChecked />
                    <label className="form-check-label formInputRadioText" htmlFor="lokasi">
                      Semarang
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="lokasi" id="lokasi" />
                    <label className="form-check-label formInputRadioText" htmlFor="lokasi">
                      Yogyakarta
                    </label>
                  </div>
                </div>
                <h6 className="fw-bold">Posisi</h6>
                <p>
                </p><div className="mb-3">
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="posisi" id="posisi" />
                    <label className="form-check-label formInputRadioText" htmlFor="posisi">
                      Mandor
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="posisi" id="posisi" defaultChecked />
                    <label className="form-check-label formInputRadioText" htmlFor="posisi">
                      Pekerja
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="posisi" id="posisi" />
                    <label className="form-check-label formInputRadioText" htmlFor="posisi">
                      Asistern
                    </label>
                  </div>
                </div>
                <p />
                <h6 className="fw-bold">Keahlian</h6>
                <div className="mb-3">
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="keahlian" id="keahlian" />
                    <label className="form-check-label formInputRadioText" htmlFor="keahlian">
                      Tukang batu
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="keahlian" id="keahlian" />
                    <label className="form-check-label formInputRadioText" htmlFor="keahlian">
                      Tukang plafon
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="keahlian" id="keahlian" defaultChecked />
                    <label className="form-check-label formInputRadioText" htmlFor="keahlian">
                      Tukang cat
                    </label>
                  </div>
                  <div className="form-check me-3 d-flex align-items-center">
                    <input className="me-2 form-check-input" type="radio" name="keahlian" id="keahlian" />
                    <label className="form-check-label formInputRadioText" htmlFor="keahlian">
                      Tukang Keramik
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            {/* content */}
            <div className="mx-auto">
              {/* Table Area */}
              <div className="mx-auto">
                <table className="table text-white py-3 overflow-hidden" style={{ borderRadius: '50px', backgroundColor: '#010032' }}>
                  <thead className="text-center" style={{ background: '#5C007C', borderRadius: '50px 50px 0px 0px !important', overflow: 'hidden' }}>
                    <tr>
                      <th>
                        <div className="my-3">Nama</div>
                      </th>
                      <th>
                        <div className="my-3">Lokasi</div>
                      </th>
                      <th>
                        <div className="my-3">Posisi</div>
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
                    <tr>
                      <td className="borderTable">
                        <div className="py-3">John W</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Pekerja</div>
                      </td>
                      <td style={{ maxWidth: '70px' }} className="borderTable">
                        <div className="py-3">Tukang Cat</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Rekrut</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="borderTable">
                        <div className="py-3">Ayeng</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Pekerja</div>
                      </td>
                      <td style={{ maxWidth: '100px' }} className="borderTable">
                        <div className="py-3">Tukang Keramik, Tukang Cat</div>
                      </td>
                      <td style={{ maxWidth: '70px' }}>
                        <div className="my-3 d-flex justify-content-center flex-wrap">
                          <button type="button" className="btnTable" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btnTable">Rekrut</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="borderTable">
                        <div className="py-3">Ari</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Semarang</div>
                      </td>
                      <td className="borderTable">
                        <div className="py-3">Pekerja</div>
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
                  </tbody>
                </table>
              </div>
              {/* End Table Area */}
            </div>
            {/*end content */}
          </div>
        </div>
      </div>


      <div>
        {/* Modal Detail Profile*/}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content" style={{ borderRadius: '50px' }}>
              <div className="modal-header border-0">
                <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-5">
                {/* Profile Area */}
                <div className="card" style={{ border: '3px solid #010032', boxSizing: 'border-box', borderRadius: '50px', backgroundColor: 'white' }}>
                  <div className="card-body ">
                    <div className="d-flex flex-column pt-4 pb-3 px-2">
                      <div>
                        <div className="row">
                          <div className="col-12 col-md-5 mb-3 col-lg-4 d-flex justify-content-center">
                            <img src={PhotoPerson} alt="foto mitra" className style={{ objectFit: 'cover', borderRadius: '50px' }} />
                          </div>
                          <div className="col-12 col-md-7 mb-3 col-lg-8">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td style={{ width: '165px' }}>Nama Lengkap</td>
                                  <td style={{ width: '10px' }}>:</td>
                                  <td>John Doe</td>
                                </tr>
                                <tr>
                                  <td style={{ width: '165px' }}>Tempat, tanggal lahir</td>
                                  <td style={{ width: '10px' }}>:</td>
                                  <td>Semarang, 1 Januari 1965</td>
                                </tr>
                                <tr>
                                  <td style={{ width: '165px' }}>Domisili</td>
                                  <td style={{ width: '10px' }}>:</td>
                                  <td>Semarang</td>
                                </tr>
                                <tr>
                                  <td style={{ width: '165px' }}>Keahlian</td>
                                  <td style={{ width: '10px' }}>:</td>
                                  <td>Pekerja Cat, Pekerja Pasang Keramik</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column py-4 px-4" style={{ border: 'none', borderRadius: '0 0 50px 50px', backgroundColor: '#FF8A00' }}>
                        <h6 className="fw-bold">Deskripsi Diri</h6>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium, nam nihil vero
                          voluptatum
                          odit dolorem, harum corrupti rem voluptatibus optio in perferendis minus numquam sequi possimus,
                          molestiae
                          ipsam maxime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Profile Area */}
              </div>
            </div>
          </div>
        </div>
        {/* Modal Rekrut*/}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: '50px' }}>
              <div className="modal-body text-center">
                <h1>
                  BERHASIL MEREKRUT!
                </h1>
                <p>
                  Kamu sudah berhasil merekrut, selanjutnya Call Center akan menghubungimu dalam waktu 1x24 jam. Pastikan kamu
                  menerima panggilan untuk menyepakati kontrak kerja.
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

export default TableJasa;