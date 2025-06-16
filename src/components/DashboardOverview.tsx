import React, { useState } from 'react';

const inspirationalQuotes = [
  "A jó logisztika láthatatlan – de mindenki érzi, ha működik.",
  "A fuvar több, mint szállítás – ez kapcsolat az országok között.",
  "Egy jól kiosztott fuvar fél siker.",
  "A sofőr nem csak vezet – ő tartja mozgásban az országot."
];

const initialShipments = [
  {
    id: 1,
    from: "Budapest", to: "München", date: "Apr. 24", status: "Folyamatban",
    driver: "Kovács László", tractor: "ABC-123", trailer: "DEF-456",
    loadCompany: "Metro Budapest raktár", loadTime: "2025-04-24 08:00",
    unloadCompany: "Lidl München központ", unloadTime: "2025-04-25 10:00"
  },
  {
    id: 2,
    from: "Debrecen", to: "Vienna", date: "Apr. 21", status: "Teljesítve",
    driver: "Szabó Anna", tractor: "XYZ-987", trailer: "GHI-654",
    loadCompany: "Kika Debrecen", loadTime: "2025-04-21 07:00",
    unloadCompany: "XXL Vienna", unloadTime: "2025-04-22 09:00"
  },
  {
    id: 3,
    from: "Győr", to: "Milan", date: "Apr. 15", status: "Teljesítve",
    driver: "Kiss Gergely", tractor: "MNO-456", trailer: "JKL-789",
    loadCompany: "Audi Logisztika", loadTime: "2025-04-15 06:00",
    unloadCompany: "IKEA Milan", unloadTime: "2025-04-16 13:00"
  }
];

export default function DashboardOverview() {
  const [quote] = useState(() => inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]);
  const [shipments, setShipments] = useState(initialShipments);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const handleArchive = (id: number) => {
    const toArchive = shipments.find(s => s.id === id);
    if (toArchive) {
      const archived = JSON.parse(localStorage.getItem("archivedShipments") || "[]");
      archived.push(toArchive);
      localStorage.setItem("archivedShipments", JSON.stringify(archived));
      setShipments(shipments.filter(s => s.id !== id));
    }
  };

  return (
    <div style={{ backgroundColor: '#f3fdf4', padding: '2rem', minHeight: '100vh', fontFamily: 'sans-serif' }}>
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

        <h3 style={{ fontSize: '1.1rem', color: '#065f46', marginBottom: '1rem' }}>Legutóbbi fuvarok</h3>

        {shipments.map((s) => (
          <div key={s.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            marginBottom: '1rem',
            padding: '1rem',
            cursor: 'pointer'
          }} onClick={() => handleToggle(s.id)}>
            <div style={{ fontWeight: 'bold', color: '#065f46' }}>
              🚚 {s.driver} – {s.from} → {s.to} – {s.status} {expandedId === s.id ? "▾" : "▸"}
            </div>
            {expandedId === s.id && (
              <div style={{ marginTop: '0.5rem', color: '#374151' }}>
                <div>🕓 Dátum: {s.date}</div>
                <div>🚛 Vontató: {s.tractor} | Pótkocsi: {s.trailer}</div>
                <div>🏭 Felrakás: {s.loadCompany} – {s.loadTime}</div>
                <div>🏢 Lerakás: {s.unloadCompany} – {s.unloadTime}</div>
                {s.status === "Teljesítve" && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleArchive(s.id); }}
                    style={{
                      marginTop: '0.75rem',
                      backgroundColor: '#065f46',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                    Archiválás
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        {shipments.length === 0 && (
          <div style={{ padding: '1rem', color: '#6b7280' }}>Nincs aktív fuvar.</div>
        )}
      </div>
    </div>
  );
}
