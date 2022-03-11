import React from 'react';
import PhotoPerson from '../../../assets/person1.png'

function Profile(props) {
  return (
    <>

      {/* content */}
      <div style={{ width: '90%', paddingBottom: '80px', marginTop: '72px' }} className="mx-auto">
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium, nam nihil vero voluptatum
                  odit dolorem, harum corrupti rem voluptatibus optio in perferendis minus numquam sequi possimus, molestiae
                  ipsam maxime.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Profile Area */}
      </div>
      {/*end content */}


    </>
  );
}

export default Profile;