import React from 'react';
import { Switch, Route } from "react-router-dom";


import Navbar from '../component/navbar/Navbar';
import NavbarWhite from '../component/navbar/NavbarWhite';
import NavbarAuth from '../component/navbar/NavbarAuth';
import Beranda from '../views/Beranda';
import BuatProyek from '../views/BuatProyek';
import GabungMitra from '../views/GabungMitra';
import CariJasa from '../views/CariJasa';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import Footer from '../component/Footer';
import RegisterMitra from '../views/Auth/RegisterMitra';
import TableJasa from '../views/TableJasa';

import Authenticated from '../middleware/Authenticated';
import Guest from '../middleware/Guest';

import LayoutDashboard from '../layout/LayoutDashboard';

import NotFound from '../component/NotFound';
import MustLogin from '../component/MustLogin';
import DetailProyekUser from '../views/Dashboard/Customer/DetailProyekUser';

function Router(props) {
  return (
    <>

      <Switch>

        <Route exact path="/">
          <Navbar />
          <Beranda />
          <Footer />
        </Route>

        {/* must login */}
        <Route exact path="/buat-proyek">
          <Authenticated>
            <Navbar />
            {/* <NavbarWhite /> */}
            <BuatProyek />
          </Authenticated>
        </Route>

        <Route exact path="/detail-proyek">
          <Authenticated>
            <Navbar />
            {/* <NavbarWhite /> */}
            <DetailProyekUser />
          </Authenticated>
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

        {/* authenticated guest */}
        <Route path="/register-mitra">
          <Guest>
            <div style={{ backgroundColor: '#010032' }}>
              <NavbarAuth />
              <RegisterMitra />
            </div>
          </Guest>
        </Route>

        <Route path="/register">
          <Guest>
            <div style={{ backgroundColor: '#010032' }}>
              <NavbarAuth />
              <Register />
            </div>
          </Guest>
        </Route>

        <Route path="/login">
          <Guest>
            <div style={{ backgroundColor: '#010032' }}>
              <NavbarAuth />
              <Login />
            </div>
          </Guest>
        </Route>
        {/*end authenticated guest */}


        <Route path="/dashboard">
          <Authenticated>
            <LayoutDashboard />
          </Authenticated>
        </Route>

        {/* Halaman must login */}
        <Route exact path="/login-dulu-yuk" component={MustLogin} />

        {/* 404 not found */}
        {/* harus dibawah terus agar tidak ngebug */}
        <Route exact path="*" component={NotFound} />


      </Switch>


    </>
  );
}

export default Router;