import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const greetings = [
  "A fuvar nem vár – de te irányítod.",
  "A legjobb sofőr a nyugodt sofőr.",
  "Az adat mögött mindig ember van.",
  "Minden sikeres nap egy jól kiosztott fuvarral kezdődik.",
  "Jó úton jársz – folytasd így!"
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [greeting] = useState(() => greetings[Math.floor(Math.random() * greetings.length)]);
  const [openSections, setOpenSections] = useState<string[]>(["Fuvarok", "Sofőrök", "Alvállalkozók"]);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{
        width: collapsed ? '60px' : '250px',
        backgroundColor: '#f1f5f9',
        color: '#1e293b',
        padding: '1rem',
        overflowY: 'auto',
        transition: 'width 0.3s ease-in-out',
        borderRight: '1px solid #cbd5e1'
      }}>
        <button onClick={() => setCollapsed(!collapsed)} style={{
          marginBottom: '1rem',
          background: 'transparent',
          border: 'none',
          color: '#1e293b',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}>
          ☰
        </button>
        {!collapsed && <h2 style={{ fontSize: '1.2rem' }}>🚚 Fuvarügynök</h2>}
        <ul style={{ listStyle: 'none', padding: 0, fontSize: collapsed ? '0.8rem' : '1rem' }}>
          {!collapsed && (
            <>
              <li><Link style={linkStyle} to="/dashboard">Dashboard – Áttekintés</Link></li>
              <li><button onClick={() => toggleSection("Fuvarok")} style={buttonStyle}>Fuvarok ▾</button></li>
              {openSections.includes("Fuvarok") && (
                <>
                  <li><Link style={linkStyle} to="/dashboard/active">Aktív fuvarok</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/completed">Befejezett fuvarok</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/upload">Fuvarfeltöltés</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/search">Fuvarkeresés</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/trailer-status">Pótkocsi állapot</Link></li>
                </>
              )}
              <li><button onClick={() => toggleSection("Sofőrök")} style={buttonStyle}>Sofőrök ▾</button></li>
              {openSections.includes("Sofőrök") && (
                <>
                  <li><Link style={linkStyle} to="/dashboard/driver-add">Sofőr hozzáadása</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/driver-assign">Fuvar hozzárendelés</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/driver-stats">Fuvarstatisztika</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/driver-ai">AI kérdezés</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/driver-chat">Sofőr chat</Link></li>
                </>
              )}
              <li><button onClick={() => toggleSection("Alvállalkozók")} style={buttonStyle}>Alvállalkozók ▾</button></li>
              {openSections.includes("Alvállalkozók") && (
                <>
                  <li><Link style={linkStyle} to="/dashboard/subcontractor-add">Új alvállalkozó</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/subcontractor-list">Meglévő alvállalkozók</Link></li>
                  <li><Link style={linkStyle} to="/dashboard/subcontractor-chat">Alvállalkozó chat</Link></li>
                </>
              )}
              <li><Link style={linkStyle} to="/dashboard/incoming">Bejövő számlák</Link></li>
              <li><Link style={linkStyle} to="/dashboard/outgoing">Kimenő számlák</Link></li>
              <li><Link style={linkStyle} to="/dashboard/fair-distribution">AI kiosztási logika</Link></li>
              <li><Link style={linkStyle} to="/dashboard/profile">Profil / AI státusz</Link></li>
            </>
          )}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#f8fafc' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2>Üdvözlünk, Partner!</h2>
          <em style={{ fontStyle: 'italic', color: '#64748b' }}>{greeting}</em>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: '#1e293b',
  textDecoration: 'none',
  display: 'block',
  margin: '0.3rem 0'
};

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  color: '#1e293b',
  cursor: 'pointer',
  padding: 0,
  margin: '0.3rem 0',
  fontSize: '1rem',
  fontWeight: 'bold'
};
