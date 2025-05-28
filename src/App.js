import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed 'Switch' to 'Routes' and removed 'Switch' from import
import Navbar from './components/Navbar';
import PatientList from './components/PatientList';
import MedicationList from './components/MedicationList';
import HealthRecordList from './components/HealthRecordList';
import UserList from './components/UserList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Replaced <Switch> with <Routes> */}
        <Route path="/" exact element={<h1>Welcome to the Nurse App</h1>} /> {/* Used 'element' prop */}
        <Route path="/patients" element={<PatientList />} /> {/* Used 'element' prop */}
        <Route path="/medications" element={<MedicationList />} /> {/* Used 'element' prop */}
        <Route path="/health-records" element={<HealthRecordList />} /> {/* Used 'element' prop */}
        <Route path="/users" element={<UserList />} /> {/* Used 'element' prop */}
      </Routes>
    </Router>
  );
};

export default App;
