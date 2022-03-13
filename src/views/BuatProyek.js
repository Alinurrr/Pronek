import React from 'react';
import { Link } from 'react-router-dom';

function BuatProyek(props) {


  return (
    <>


      {/* Form */}
      <div className="card container" style={{ border: 'none', borderRadius: '60px', backgroundColor: '#010032', marginTop: '45px', marginBottom: '45px' }}>
        <div className="card-body ">
          <form style={{ maxWidth: '1000px', padding: '58px 0 34px' }} className="mx-auto">
            <div className="mb-4">
              <label htmlFor="namaProyek" className="fomtTitle form-label text-white">Nama Proyek</label>
              <input placeholder="Masukkan nama proyekmu" type="text" className=" fomtInput" id="namaProyek" />
            </div>
            <div className="mb-4">
              <label htmlFor="alamatProyek" className="fomtTitle form-label text-white">Alamat Proyek</label>
              <input placeholder="Masukkan dimana alamat proyekmu" type="text" className=" fomtInput" id="alamatProyek" />
            </div>
            <div className="mb-4">
              <label htmlFor="Jenis-Proyek" className="fomtTitle form-label text-white">Jenis Proyek</label>
              <select id="Jenis-Proyek" className="form-select inputSelect ">
                <option selected disabled>-- Pilih Jenis Proyek --</option>
                <option>Proyek Bedah Rumah</option>
                <option>Proyek Renovasi</option>
                <option>Proyek Bangun Gedung</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="kebutuhanTenaga" className="fomtTitle form-label text-white">Kebutuhan Tenaga</label>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="input-group mb-3" style={{ height: '60px' }}>
                      <span style={{ minWidth: '170px', backgroundColor: '#FF8A00', borderRadius: '20px 0px 0px 20px', fontWeight: 600, fontSize: '20px', lineHeight: '30px' }} className="input-group-text">Mandor</span>
                      <input style={{ borderRadius: '0px 20px 20px 0px', fontWeight: 600, fontSize: '20px', lineHeight: '30px', textAlign: 'center' }} type="number" className="form-control" placeholder={0} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="input-group mb-3" style={{ height: '60px' }}>
                      <span style={{ minWidth: '170px', backgroundColor: '#FF8A00', borderRadius: '20px 0px 0px 20px', fontWeight: 600, fontSize: '20px', lineHeight: '30px' }} className="input-group-text">Pekerja</span>
                      <input style={{ borderRadius: '0px 20px 20px 0px', fontWeight: 600, fontSize: '20px', lineHeight: '30px', textAlign: 'center' }} type="number" className="form-control" placeholder={0} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="input-group mb-3" style={{ height: '60px' }}>
                      <span style={{ minWidth: '170px', backgroundColor: '#FF8A00', borderRadius: '20px 0px 0px 20px', fontWeight: 600, fontSize: '20px', lineHeight: '30px' }} className="input-group-text">Asisten</span>
                      <input style={{ borderRadius: '0px 20px 20px 0px', fontWeight: 600, fontSize: '20px', lineHeight: '30px', textAlign: 'center' }} type="number" className="form-control" placeholder={0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="detailProyek" className="fomtTitle form-label text-white">Detail Proyek</label>
              <textarea style={{ minHeight: '200px' }} className="fomtInput" placeholder="Tulisakan detail proyekmu disini" id="detailProyek" defaultValue={""} />
            </div>
            <div className="row">
              <div className="col col-sm-6 mb-3">
                <label htmlFor="waktuMulai" className="fomtTitle form-label text-white">Waktu Mulai</label>
                <input placeholder="Masukkan dimana alamat proyekmu" type="date" className=" fomtInput" id="waktuMulai" />
              </div>
              <div className="col col-sm-6 mb-3">
                <label htmlFor="waktuSelesai" className="fomtTitle form-label text-white">Waktu Selesai</label>
                <input placeholder="Masukkan dimana alamat proyekmu" type="date" className=" fomtInput" id="waktuSelesai" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="formFile" className="fomtTitle text-white mb-1">Default file input example</label>
              <input className="form-control fomtInput" type="file" id="formFile" />
            </div>
            {/* button */}
            <div className="row">
              <div className="col d-grid mt-5">
                <Link to="/detail-proyek" style={{ backgroundColor: '#FF8A00', borderRadius: '20px', fontSize: '20px', fontWeight: 700, padding: '14px 0' }} className="btn text-white text-center">Submit</Link>
              </div>
            </div>
            {/*end button */}
          </form>
        </div>
      </div>
      {/* End Form */}


    </ >
  );
}

export default BuatProyek;