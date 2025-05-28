import React, { useEffect, useState } from 'react';
import { fetchMedications, createMedication, updateMedication, deleteMedication } from '../api';
import MedicationForm from './MedicationForm';

const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  const [editingMedication, setEditingMedication] = useState(null);

  useEffect(() => {
    const loadMedications = async () => {
      const response = await fetchMedications();
      setMedications(response.data);
    };
    loadMedications();
  }, []);

  const handleAddOrUpdate = async (medication) => {
    if (editingMedication) {
      await updateMedication(editingMedication._id, medication);
    } else {
      await createMedication(medication);
    }
    setEditingMedication(null);
    const response = await fetchMedications();
    setMedications(response.data);
  };

  const handleEdit = (medication) => {
    setEditingMedication(medication);
  };

  const handleDelete = async (id) => {
    await deleteMedication(id);
    const response = await fetchMedications();
    setMedications(response.data);
  };

  return (
    <div>
      <h1>Medications</h1>
      <MedicationForm medication={editingMedication} onSubmit={handleAddOrUpdate} />
      <ul>
        {medications.map(medication => (
          <li key={medication._id}>
            {medication.name} - {medication.dosage}
            <button onClick={() => handleEdit(medication)}>Edit</button>
            <button onClick={() => handleDelete(medication._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;