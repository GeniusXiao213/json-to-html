import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './components/JsonlDataDisplay';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <DataTable />
    </Router>
  );
}

export default App;
