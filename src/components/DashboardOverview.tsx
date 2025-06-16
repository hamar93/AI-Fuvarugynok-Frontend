import React, { useState } from 'react';

const inspirationalQuotes = [
  "A világ rohan – itt most megállhatsz egy pillanatra.",
  "Néha a legjobb döntés az, ha előbb megállsz, és utána indulsz.",
  "A fuvar nem csak célpont, hanem felelősség is.",
  "A jó logisztika láthatatlan – de mindenki érzi, ha működik."
];

const recentShipments = [
  { from: "Budapest", to: "München", date: "Apr. 24", status: "Folyamatban", driver: "Kovács László", plate: "ABC-123" },
  { from: "Debrecen", to: "Vienna", date: "Apr. 21", status: "Teljesítve", driver: "Szabó Anna", plate: "XYZ-987" },
  { from: "Győr", to: "Milan", date: "Apr. 15", status: "Teljesítve", driver: "Kiss Gergely", plate: "MNO-456" },
];

export default function DashboardOverview() {
  const quote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  const [search, setSearch] = useState("");

  const filtered = recentShipments.filter(s =>
    s.driver.toLowerCase().includes(search.toLowerCase()) ||
    s.plate.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#f0fdf4', borderRadius: '12px', padding: '2rem', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#dcfce7',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        fontSize: '1.25rem',
        fontWeight: '500',
        textAlign: 'center',
        color: '#166534'
      }}>
        {quote}
      </div>

      <input
        type="text"
        placeholder="Keresés sofőr vagy rendszám alapján..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '0.75rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1.5rem',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          fontSize: '1rem'
        }}
      />

      <table style={{ width: '100%', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#bbf7d0', color: '#064e3b' }}>
          <tr>
            <th style={thStyle}>Felrakodás</th>
            <th style={thStyle}>Lerakodás</th>
            <th style={thStyle}>Dátum</th>
            <th style={thStyle}>Sofőr</th>
            <th style={thStyle}>Rendszám</th>
            <th style={thStyle}>Állapot</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={i} style={{ textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
              <td style={tdStyle}>{s.from}</td>
              <td style={tdStyle}>→ {s.to}</td>
              <td style={tdStyle}>{s.date}</td>
              <td style={tdStyle}>{s.driver}</td>
              <td style={tdStyle}>{s.plate}</td>
              <td style={tdStyle}>
                <span style={{
                  backgroundColor: s.status === 'Teljesítve' ? '#bbf7d0' : '#fde68a',
                  color: s.status === 'Teljesítve' ? '#166534' : '#92400e',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>{s.status}</span>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr><td colSpan={6} style={{ padding: '1rem', color: '#64748b' }}>Nincs találat.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '0.75rem',
  fontSize: '1rem'
};

const tdStyle = {
  padding: '0.75rem',
  fontSize: '0.95rem',
  color: '#1f2937'
};
