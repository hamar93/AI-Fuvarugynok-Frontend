import React from 'react';

const inspirationalQuotes = [
  "A világ rohan – itt most megállhatsz egy pillanatra.",
  "Néha a legjobb döntés az, ha előbb megállsz, és utána indulsz.",
  "A fuvar nem csak célpont, hanem felelősség is.",
  "A jó logisztika láthatatlan – de mindenki érzi, ha működik."
];

const shipments = [
  { from: "Budapest", to: "München", date: "Apr. 24", status: "Folyamatban" },
  { from: "Debrecen", to: "Vienna", date: "Apr. 21", status: "Teljesítve" },
  { from: "Győr", to: "Milan", date: "Apr. 15", status: "Teljesítve" }
];

export default function DashboardOverview() {
  const quote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  return (
    <div style={{
      backgroundColor: '#f3fdf4',
      padding: '2rem',
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          backgroundColor: '#e6f4ea',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#065f46'
        }}>
          {quote}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#065f46' }}>Legutóbbi fuvarok</h3>
          <button style={{
            backgroundColor: '#166534',
            color: 'white',
            padding: '0.5rem 1rem',
            fontSize: '0.9rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Új fuvar hozzáadása
          </button>
        </div>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead style={{ backgroundColor: '#bbf7d0', color: '#064e3b' }}>
            <tr>
              <th style={thStyle}>Felrakodás</th>
              <th style={thStyle}>Lerakodás</th>
              <th style={thStyle}>Dátum</th>
              <th style={thStyle}>Állapot</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s, i) => (
              <tr key={i} style={{ textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
                <td style={tdStyle}>{s.from}</td>
                <td style={tdStyle}>→ {s.to}</td>
                <td style={tdStyle}>{s.date}</td>
                <td style={tdStyle}>
                  <span style={{
                    backgroundColor: s.status === 'Teljesítve' ? '#bbf7d0' : '#defbe6',
                    color: s.status === 'Teljesítve' ? '#166534' : '#166534',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
