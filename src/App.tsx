import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Active from './pages/Active';
import Completed from './pages/Completed';
import Upload from './pages/Upload';
import Search from './pages/Search';
import DriverAdd from './pages/DriverAdd';
import DriverStats from './pages/DriverStats';
import DriverAI from './pages/DriverAI';
import DriverAssign from './pages/DriverAssign';
import TrailerStatus from './pages/TrailerStatus';
import FairDistribution from './pages/FairDistribution';
import SubcontractorAdd from './pages/SubcontractorAdd';
import Assign from './pages/Assign';
import Docs from './pages/Docs';
import Incoming from './pages/IncomingInvoices';
import Outgoing from './pages/OutgoingInvoices';
import InviteAdmin from './pages/InviteAdmin';
import InviteDriver from './pages/InviteDriver';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="active" element={<Active />} />
          <Route path="completed" element={<Completed />} />
          <Route path="upload" element={<Upload />} />
          <Route path="search" element={<Search />} />
          <Route path="driver-add" element={<DriverAdd />} />
          <Route path="driver-stats" element={<DriverStats />} />
          <Route path="driver-ai" element={<DriverAI />} />
          <Route path="driver-assign" element={<DriverAssign />} />
<Route path="trailer-status" element={<TrailerStatus />} />
<Route path="fair-distribution" element={<FairDistribution />} />
          <Route path="subcontractor-add" element={<SubcontractorAdd />} />
          <Route path="assign" element={<Assign />} />
          <Route path="docs" element={<Docs />} />
          <Route path="incoming" element={<Incoming />} />
          <Route path="outgoing" element={<Outgoing />} />
          <Route path="invite-admin" element={<InviteAdmin />} />
          <Route path="invite-driver" element={<InviteDriver />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
