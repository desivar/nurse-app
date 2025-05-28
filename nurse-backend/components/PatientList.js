import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;