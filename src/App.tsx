// App.tsx minta
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TranslationTool from './pages/TranslationTool';
export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/translate" element={<TranslationTool />} />
  </Routes></BrowserRouter>;
}