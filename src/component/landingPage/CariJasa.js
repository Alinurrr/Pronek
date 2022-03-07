import React from 'react';

function CariJasa(props) {

  const inputSelect = {
    backgroundColor: '#FF8A00',
    border: '3px solid #262727',
    borderRadius: '10px',
    fontSize: '21px',
    fontWeight: '600'
  };

  return (
    <>

      <div style={{ backgroundColor: '#FF8A00', fontFamily: 'Poppins' }}>
        <div className="container">
          <div className="row text-white justify-content-center align-items-center py-5">
            <div style={{ backgroundColor: '#FF8A00', fontWeight: '600', fontSize: '30px' }} className="col-12 col-lg-5">
              Cari Jasa Mandor / Pekerja Bangunan Disini Yuk...
            </div>
            <div className="col-12 col-lg-5 py-4">

              <form>
                <div className="mb-3">
                  <select style={inputSelect} id="Jenis-Mitra" className="form-select text-white text-center">
                    <option>Mandor</option>
                    <option>Pekerja</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select style={inputSelect} id="Lokasi" className="form-select text-white text-center">
                    <option>Semarang</option>
                    <option>Yogyakarta</option>
                  </select>
                </div>
                <div className="d-grid gap-2">
                  <button style={{ backgroundColor: '#010032', borderRadius: '10px', fontSize: '21px', fontWeight: '800' }} type="submit" className="btn text-white text-center">CARI !</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default CariJasa;