import React, { useState, useEffect } from 'react';

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("driverIssues") || "[]");
    setIssues(data);
  }, []);

  const markAsResolved = (index: number) => {
    const updated = [...issues];
    updated[index].status = "Megoldva";
    localStorage.setItem("driverIssues", JSON.stringify(updated));
    setIssues(updated);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Bejelentett hibák</h2>
      {issues.length === 0 && <p>Nincs aktív hiba.</p>}
      <ul>
        {issues.map((issue, index) => (
          <li key={index} style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: issue.status === "Folyamatban" ? '#fef9c3' : '#dcfce7',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}>
            <strong>Rendszám:</strong> {issue.plate} <br />
            <strong>Hiba:</strong> {issue.description} <br />
            <strong>Időpont:</strong> {new Date(issue.time).toLocaleString()} <br />
            <strong>Státusz:</strong> {issue.status} <br />
            {issue.status === "Folyamatban" && (
              <button onClick={() => markAsResolved(index)} style={{
                marginTop: '0.5rem',
                padding: '0.4rem 1rem',
                backgroundColor: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '6px'
              }}>Javítva</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
