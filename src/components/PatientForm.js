import React, { useState, useEffect } from 'react';

const PatientForm = ({ patient, onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (patient) {
      setName(patient.name);
      setAge(patient.age);
    } else {
      setName('');
      setAge('');
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button type="submit">{patient ? 'Update' : 'Add'} Patient</button>
    </form>
  );
};

export default PatientForm;