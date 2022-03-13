import React from 'react';
import NavbarAuthCust from './NavbarAuthCust';
import NavbarAuthMtr from './NavbarAuthMtr';

import { useRecoilState } from 'recoil';
import { authenticated } from '../../store'



function NavbarDashboar(props) {
  const [auth] = useRecoilState(authenticated)

  return (
    <>

      {
        auth.user.email !== 'mitra@pronek.id' ?
          <NavbarAuthCust />
          :
          <NavbarAuthMtr />
      }

    </>
  );
}

export default NavbarDashboar;