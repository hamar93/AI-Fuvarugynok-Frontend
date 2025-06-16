import React, { useState } from 'react';

export default function DriverReport() {
  const [plate, setPlate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("driverIssues") || "[]");
    existing.push({ plate, description, time: new Date().toISOString(), status: "Folyamatban" });
    localStorage.setItem("driverIssues", JSON.stringify(existing));
    setPlate("");
    setDescription("");
    alert("Hiba bejelentve!");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Új hiba bejelentése</h2>
      <form onSubmit={handleSubmit}>
        <label>Rendszám:</label><br />
        <input value={plate} onChange={(e) => setPlate(e.target.value)} required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} /><br />
        <label>Hiba leírása:</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required
          rows={4} style={{ width: '100%', padding: '0.5rem' }} /><br />
        <button type="submit" style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#065f46',
          color: 'white',
          border: 'none',
          borderRadius: '6px'
        }}>Bejelentés mentése</button>
      </form>
    </div>
  );
}
