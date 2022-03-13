import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../store';

import PhotoPerson from '../assets/person1.png'


function UserDropdown(props) {
  const [auth, setAuth] = useRecoilState(authenticated)
  const redirect = useHistory()

  const logout = async () => {
    setAuth({ check: false })
    redirect.push('/login')
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dropdown">
          <button style={{ borderLeft: '3px solid white' }} className={`${props.userContent.TextColor} btn dropdown-toggle rounded-0 ps-5`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {auth.user.email === "mitra@pronek.id" ? 'Mitra_Pronek' : 'John'}
            <img src={PhotoPerson} alt="foto mitra" className="mx-3 rounded-circle" style={{ height: '48px', width: '48px', objectFit: 'cover', borderRadius: 'full' }} />
          </button>
          <ul className=" dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              {
                auth.user.email === "mitra@pronek.id" ?
                  <Link className="dropdown-item" to="/dashboard/mitra">Dashboard</Link>
                  :
                  <Link className="dropdown-item" to="/dashboard/cust">Dashboard</Link>

              }
            </li>

            <li><Link className="dropdown-item" to="/dashboard/profile">Profile</Link></li>
            <li><button className="dropdown-item" onClick={logout}>Log out</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserDropdown;