import React from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { authenticated } from '../../store';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

function AdminNavbar(props) {
  const [menuProfile, setProfileMenu] = React.useState(false);
  const [auth, setAuth] = useRecoilState(authenticated)
  const redirect = useHistory()
  const logout = async () => {
    try {
      let response = await axios.post('api/logout')
      setAuth({ check: false })
      localStorage.removeItem('tokenUser')
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      redirect.push('/')
    } catch (e) {
      toast.error(e.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      console.log(e.message);
    }
  }

  return (
    <div >
      <nav className="relative bg-indigo-400 top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap  md:justify-start flex items-center p-4">
        <div className="relative w-full mx-auto items-center flex justify-end md:justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Form */}
          <form className="md:flex hidden  flex-row flex-wrap items-center ml-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
                <FontAwesomeIcon icon={faSearch} className="fa-sm text-blue-200" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* Brand */}

          <div >
            <button
              className="text-white text-sm uppercase font-semibold  px-4 py-2.5 text-center inline-flex items-center "
              type="button"
              data-dropdown-toggle="dropdown"
              onClick={() => setProfileMenu(!menuProfile)}>
              {/* className={
                      "lg:flex flex-grow items-center lg:justify-center" +
                      (navbarOpen ? " flex" : " hidden")
                    } */}
              {auth.user.name}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {/* Dropdown menu */}
            <div className=
              {
                "bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" +
                (menuProfile ? " absolute" : " hidden")
              } id="dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm">{auth.user.name}</span>
                <span className="block text-sm font-medium text-gray-900 truncate">{auth.user.email}</span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <NavLink to="/" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Halaman Depan</NavLink>
                </li>
                <li>
                  <NavLink to="/admin/dashboard" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Profile</NavLink>
                </li>
                <li className="hover:bg-gray-100">
                  <button onClick={logout} className="text-sm  text-gray-700 block px-4 py-2 w-full text-left">Logout</button>
                </li>
              </ul>
            </div>

          </div>


        </div>




      </nav>
    </div>
  );
}

export default AdminNavbar;