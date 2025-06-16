import React, { useState } from 'react';

const sampleData = [
  { id: 1, driver: 'Kovács László', plate: 'ABC-123', from: 'Budapest', to: 'Berlin', cargo: '10 raklap elektronika', loadTime: '2025-06-17 08:00', unloadTime: '2025-06-18 16:00', status: 'Folyamatban', alert: 'Lehetséges késés' },
  { id: 2, driver: 'Szabó Anna', plate: 'XYZ-987', from: 'Szeged', to: 'Prága', cargo: '15 raklap bútor', loadTime: '2025-06-16 09:00', unloadTime: '2025-06-17 18:00', status: 'Teljesítve', alert: 'Minden rendben' },
  { id: 3, driver: 'Kiss Gergely', plate: 'MNO-456', from: 'Győr', to: 'Milánó', cargo: '8 raklap ruházat', loadTime: '2025-06-15 07:30', unloadTime: '2025-06-16 20:00', status: 'Folyamatban', alert: 'Nincs GPS jel' },
];

export default function DashboardMain() {
  const [search, setSearch] = useState('');
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filtered = sampleData.filter(
    d => d.driver.toLowerCase().includes(search.toLowerCase()) || d.plate.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Aktuális fuvarok</h2>
      <input
        type="text"
        placeholder="Keresés név vagy rendszám alapján..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', maxWidth: '400px', marginBottom: '1rem' }}
      />
      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {filtered.map((d) => {
          const expanded = expandedIds.includes(d.id);
          return (
            <div key={d.id} style={{
              backgroundColor: d.status === 'Teljesítve' ? '#d4edda' : '#fff3cd',
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px'
            }}>
              <div style={{ cursor: 'pointer' }} onClick={() => toggleExpand(d.id)}>
                <strong>🚛 {d.driver} ({d.plate})</strong> – <em>{d.status}</em> {expanded ? '▾' : '▸'}
              </div>
              {expanded && (
                <div style={{ marginTop: '0.5rem' }}>
                  <div>Indulás: {d.from} → Cél: {d.to}</div>
                  <div>Áru: {d.cargo}</div>
                  <div>Rakodás: {d.loadTime} | Lerakás: {d.unloadTime}</div>
                  <div><strong>🧠 AI:</strong> {d.alert}</div>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && <div>Nincs találat.</div>}
      </div>
    </div>
  );
}
