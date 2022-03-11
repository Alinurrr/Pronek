import React from 'react';
import { Switch, Route } from "react-router-dom";


import Navbar from '../component/navbar/Navbar';
import NavbarWhite from '../component/navbar/NavbarWhite';
import Beranda from '../views/Beranda';
import BuatProyek from '../views/BuatProyek';
import GabungMitra from '../views/GabungMitra';
import CariJasa from '../views/CariJasa';
import Register from '../views/Auth/Register';
import Login from '../views/Auth/Login';
import Footer from '../component/Footer';

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
        </Route>

        <Route exact path="/cari-jasa">
          <Navbar />
          <CariJasa />
        </Route>

        <Route path="/register">
          <Navbar />
          <Register />
        </Route>

        <Route path="/login">
          <Navbar />
          <Login />
        </Route>

      </Switch>


    </>
  );
}

export default Router;