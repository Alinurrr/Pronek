import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authenticated } from '../../store';

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = useHistory()
  const setAuth = useSetRecoilState(authenticated)

  const credentials = {
    email,
    password,
  }


  const login = async (e) => {
    console.log(credentials);
    setAuth({
      check: true,
      user: credentials
    })

    if (email === 'mitra@pronek.id') {
      redirect.push('/dashboard/mitra')
    } else {
      redirect.push('/dashboard')
    }

  }

  useEffect(() => {
    console.log(credentials);
  }, [])



  return (
    <>

      {/* content */}
      <div style={{ width: '90%', paddingBottom: '111px' }} className="mx-auto">
        {/* Title */}
        <div style={{ marginBottom: '48px', marginTop: '36px' }}>
          <h1 style={{ fontWeight: 800, fontSize: '32px' }} className="text-white">WELCOME BACK!</h1>
          <div className="d-flex align-items-center">
            <div style={{ fontWeight: 500, fontSize: '18px', color: '#455A64' }} className="me-1">Belum punya akun ? </div>
            <Link style={{ fontWeight: 500, fontSize: '18px', color: '#4abbf0', textDecoration: 'none' }} to="/register">
              Register disini</Link>
          </div>
        </div>
        {/* End Title */}
        {/* login Form */}
        <div className="card" style={{ border: 'none', borderRadius: '60px', backgroundColor: '#FF8A00' }}>
          <div className="card-header d-flex justify-content-center bg-white" style={{ borderRadius: '60px 60px 0 0', padding: '25px 0 18px', fontWeight: 700, fontSize: '26px', lineHeight: '39px', textAlign: 'center', color: '#000000' }}>
            LOG IN
          </div>
          <div className="card-body ">
            <form onSubmit={login} style={{ maxWidth: '600px', padding: '58px 0 120px' }} className="mx-auto">
              <div className="mb-3">
                <label htmlFor="email" className="fomtTitle form-label">Email address</label>
                <input autoFocus type="email" className="form-control fomtInput" id="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="fomtTitle form-label">Password</label>
                <input type="password" className="form-control fomtInput" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
              </div>
              <div className="col-12 d-grid gap-2 mt-4">
                <button type="submit" style={{ backgroundColor: '#010032', borderRadius: '20px', fontSize: '21px', fontWeight: 800, padding: '14px 0' }} type="submit" className="btn text-white text-center">Login</button>
                {/* <Link to="/dashboard/cust" style={{ backgroundColor: '#010032', borderRadius: '20px', fontSize: '21px', fontWeight: 800, padding: '14px 0' }} type="submit" className="btn text-white text-center">Login</Link>
                <Link to="/dashboard/mitra" style={{ backgroundColor: '#010032', borderRadius: '20px', fontSize: '21px', fontWeight: 800, padding: '14px 0' }} type="submit" className="btn text-white text-center">Login Mitra</Link> */}
              </div></form>
          </div>
          {/* End login Form */}
        </div>
        {/*end content */}
      </div>



    </>
  );
}

export default Login;