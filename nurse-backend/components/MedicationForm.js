import React, { useState, useEffect } from 'react';

const MedicationForm = ({ medication, onSubmit }) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  useEffect(() => {
    if (medication) {
      setName(medication.name);
      setDosage(medication.dosage);
    } else {
      setName('');
      setDosage('');
    }
  }, [medication]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, dosage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
        required
      />
      <button type="submit">{medication ? 'Update' : 'Add'} Medication</button>
    </form>
  );
};

export default MedicationForm;