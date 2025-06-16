import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const sections = [
  {
    title: "Fuvarok",
    items: [
      { to: "/dashboard/active", label: "Aktív fuvarok" },
      { to: "/dashboard/completed", label: "Befejezett fuvarok" },
      { to: "/dashboard/upload", label: "Fuvarfeltöltés" },
      { to: "/dashboard/search", label: "Fuvarkeresés" },
      { to: "/dashboard/trailer-status", label: "Pótkocsi állapot" }
    ]
  },
  {
    title: "Sofőrök",
    items: [
      { to: "/dashboard/driver-add", label: "Sofőr hozzáadása" },
      { to: "/dashboard/driver-assign", label: "Fuvar hozzárendelés" },
      { to: "/dashboard/driver-stats", label: "Fuvarstatisztika" },
      { to: "/dashboard/driver-ai", label: "AI kérdezés" },
      { to: "/dashboard/driver-chat", label: "Sofőr chat" }
    ]
  },
  {
    title: "Alvállalkozók",
    items: [
      { to: "/dashboard/subcontractor-add", label: "Új alvállalkozó" },
      { to: "/dashboard/assign", label: "Fuvar kiosztása" },
      { to: "/dashboard/subcontractor-status", label: "Állapot: úton, lerakva" },
      { to: "/dashboard/subcontractor-list", label: "Meglévő alvállalkozók" },
      { to: "/dashboard/subcontractor-chat", label: "Alvállalkozó chat" }
    ]
  },
  {
    title: "Rendszer",
    items: [
      { to: "/dashboard/incoming", label: "Bejövő számlák" },
      { to: "/dashboard/outgoing", label: "Kimenő számlák" },
      { to: "/dashboard/fair-distribution", label: "AI kiosztási logika" },
      { to: "/dashboard/profile", label: "Profil / AI státusz" }
    ]
  },
  {
    title: "Statisztikák",
    items: [
      { to: "/dashboard/driver-performance", label: "Sofőr teljesítmény" },
      { to: "/dashboard/weekly-summary", label: "Heti fuvarösszesítő" },
      { to: "/dashboard/status-chart", label: "Állapotmegoszlás" }
    ]
  },
  {
    title: "Dokumentumok",
    items: [
      { to: "/dashboard/cmr-upload", label: "CMR feltöltés" },
      { to: "/dashboard/assignments", label: "Fuvarmegbízások" },
      { to: "/dashboard/invoices-pdf", label: "Számlák (PDF)" }
    ]
  }
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(sections.map(s => s.title));

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
        {!collapsed && (
          <>
            <h2 style={{ fontSize: '1.2rem' }}>🚚 Fuvarügynök</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link style={linkStyle} to="/dashboard">Dashboard – Áttekintés</Link></li>
              {sections.map((section) => (
                <li key={section.title}>
                  <button onClick={() => toggleSection(section.title)} style={buttonStyle}>
                    {section.title} ▾
                  </button>
                  {openSections.includes(section.title) && (
                    <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                      {section.items.map((item) => (
                        <li key={item.to}><Link style={linkStyle} to={item.to}>{item.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>
      <main style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#f8fafc' }}>
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
  margin: '0.5rem 0',
  fontSize: '1rem',
  fontWeight: 'bold'
};
