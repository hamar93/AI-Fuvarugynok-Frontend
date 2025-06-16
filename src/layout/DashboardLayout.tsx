import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{
        width: '250px',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '1rem',
        overflowY: 'auto'
      }}>
        <h2 style={{ fontSize: '1.2rem' }}>🚚 Fuvarügynök</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link style={linkStyle} to="/dashboard">Dashboard – Áttekintés</Link></li>
          <li><strong>Fuvarok</strong></li>
          <li><Link style={linkStyle} to="/dashboard/active">Aktív fuvarok</Link></li>
          <li><Link style={linkStyle} to="/dashboard/completed">Befejezett fuvarok</Link></li>
          <li><Link style={linkStyle} to="/dashboard/upload">Fuvarfeltöltés</Link></li>
          <li><Link style={linkStyle} to="/dashboard/search">Fuvarkeresés</Link></li>
          <li><strong>Sofőrök</strong></li>
          <li><Link style={linkStyle} to="/dashboard/driver-add">Sofőr hozzáadása</Link></li>
          <li><Link style={linkStyle} to="/dashboard/driver-stats">Fuvarstatisztika</Link></li>
          <li><Link style={linkStyle} to="/dashboard/driver-ai">AI kérdezés</Link></li>
          <li><strong>Alvállalkozók</strong></li>
          <li><Link style={linkStyle} to="/dashboard/subcontractor-add">Új alvállalkozó</Link></li>
          <li><Link style={linkStyle} to="/dashboard/assign">Fuvar kiosztása</Link></li>
          <li><strong>Dokumentumok</strong></li>
          <li><Link style={linkStyle} to="/dashboard/docs">CMR / számlák</Link></li>
          <li><strong>Számlák</strong></li>
          <li><Link style={linkStyle} to="/dashboard/incoming">Bejövő számlák</Link></li>
          <li><Link style={linkStyle} to="/dashboard/outgoing">Kimenő számlák</Link></li>
          <li><strong>Meghívók</strong></li>
          <li><Link style={linkStyle} to="/dashboard/invite-admin">Al-admin</Link></li>
          <li><Link style={linkStyle} to="/dashboard/invite-driver">Sofőr</Link></li>
          <li><strong>Értesítések</strong></li>
          <li><Link style={linkStyle} to="/dashboard/notifications">AI értesítések</Link></li>
          <li><strong>Beállítások</strong></li>
          <li><Link style={linkStyle} to="/dashboard/profile">Profil / AI státusz</Link></li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  margin: '0.3rem 0'
};
