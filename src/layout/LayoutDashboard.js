import React from 'react';
import { Switch, Route } from "react-router-dom";
// import NavbarAuth2 from '../component/navbar/NavbarAuthMtr';

// mitra
import DashboardMitra from '../views/Dashboard/Mitra/DashboardMitra';
import CariProyek from '../views/Dashboard/Mitra/CariProyek';
import TableProyek from '../views/Dashboard/Mitra/TableProyek';
import PenawaranProyek from '../views/Dashboard/Mitra/PenawaranProyek';
import Profile from '../views/Dashboard/Mitra/Profile';
import ProyekMitra from '../views/Dashboard/Mitra/ProyekMitra';
import NavbarDashboar from '../component/navbar/NavbarDashboar';

// customer
import DashboardCust from '../views/Dashboard/Customer/DashboardCust';
import Proyek from '../views/Dashboard/Customer/Proyek';
import DetailProyekUser from '../views/Dashboard/Customer/DetailProyekUser';

import AuthMitra from '../middleware/AuthMitra';
import AuthCust from '../middleware/AuthCust';
import TableJasa from '../views/TableJasa';
import BuatProyekCust from '../views/Dashboard/Customer/BuatProyekCust';



function LayoutDashboard(props) {
  return (
    <>
      <NavbarDashboar />
      <Switch>
        <Route exact path="/dashboard/profile" component={Profile} />
      </Switch>

      <Switch>
        <AuthCust>
          {/* dashboard customer */}
          <Route exact path="/dashboard/cust" component={DashboardCust} />
          <Route exact path="/dashboard/cust/proyek" component={Proyek} />
          <Route exact path="/dashboard/cust/proyek/buat-proyek" component={BuatProyekCust} />
          <Route exact path="/dashboard/cust/proyek/detail" component={DetailProyekUser} />
          <Route exact path="/dashboard/cust/cari-jasa" component={TableJasa} />
        </AuthCust>
      </Switch>
      {/* end dashboard customer */}

      {/* dashboard mintra */}
      <Switch>
        <AuthMitra>
          <Route exact path="/dashboard/mitra" component={DashboardMitra} />
          <Route exact path="/dashboard/cari-proyek" component={CariProyek} />
          <Route exact path="/dashboard/cari-proyek/hasil" component={TableProyek} />
          <Route exact path="/dashboard/penawaran-proyek" component={PenawaranProyek} />
          <Route exact path="/dashboard/proyek" component={ProyekMitra} />
        </AuthMitra>
      </Switch >
      {/* end dashboard mitra */}
    </>

  );
}

export default LayoutDashboard;