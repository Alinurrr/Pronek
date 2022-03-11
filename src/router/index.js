import React from 'react';
import { Switch, Route } from "react-router-dom";


import Navbar from '../component/navbar/Navbar';
import NavbarWhite from '../component/navbar/NavbarWhite';
import NavbarAuth from '../component/navbar/NavbarAuth';
import NavbarAuth2 from '../component/navbar/NavbarAuth2';

import Beranda from '../views/Beranda';
import BuatProyek from '../views/BuatProyek';
import GabungMitra from '../views/GabungMitra';
import CariJasa from '../views/CariJasa';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import Footer from '../component/Footer';
import RegisterMitra from '../views/Auth/RegisterMitra';
import TableJasa from '../views/TableJasa';
import DashboardMitra from '../views/Dashboard/Mitra/DashboardMitra';

function Router(props) {
  return (
    <>

      <Switch>

        <Route exact path="/">
          <Navbar />
          <Beranda />
          <Footer />
        </Route>

        <Route exact path="/buat-proyek">
          <NavbarWhite />
          <BuatProyek />
        </Route>

        <Route exact path="/gabung-mitra">
          <Navbar />
          <GabungMitra />
          <Footer />
        </Route>

        <Route exact path="/cari-jasa">
          <Navbar />
          <CariJasa />
          <Footer />
        </Route>

        <Route exact path="/cari-jasa/hasil">
          <NavbarWhite />
          <TableJasa />
        </Route>

        {/* authenticated */}
        <Route path="/register-mitra">
          <div style={{ backgroundColor: '#010032' }}>
            <NavbarAuth />
            <RegisterMitra />
          </div>
        </Route>

        <Route path="/register">
          <div style={{ backgroundColor: '#010032' }}>
            <NavbarAuth />
            <Register />
          </div>
        </Route>

        <Route path="/login">
          <div style={{ backgroundColor: '#010032' }}>
            <NavbarAuth />
            <Login />
          </div>
        </Route>
        {/*end authenticated */}

        {/* dashboard mitra */}

        <Route exact path="/dashboard/mitra">
          <NavbarAuth2 />
          <DashboardMitra />
        </Route>
        {/*end dashboard mitra */}

      </Switch>


    </>
  );
}

export default Router;