import React, { useEffect, useState } from 'react';
import { fetchPatients, createPatient, updatePatient, deletePatient } from '../api';
import PatientForm from './PatientForm';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    const loadPatients = async () => {
      const response = await fetchPatients();
      setPatients(response.data);
    };
    loadPatients();
  }, []);

  const handleAddOrUpdate = async (patient) => {
    if (editingPatient) {
      await updatePatient(editingPatient._id, patient);
    } else {
      await createPatient(patient);
    }
    setEditingPatient(null);
    const response = await fetchPatients();
    setPatients(response.data);
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
  };

  const handleDelete = async (id) => {
    await deletePatient(id);
    const response = await fetchPatients();
    setPatients(response.data);
  };

  return (
    <div>
      <h1>Patients</h1>
      <PatientForm patient={editingPatient} onSubmit={handleAddOrUpdate} />
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>
            {patient.name}
            <button onClick={() => handleEdit(patient)}>Edit</button>
            <button onClick={() => handleDelete(patient._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;