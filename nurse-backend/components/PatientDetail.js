import React from 'react';

const PatientDetail = ({ patient }) => {
  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Health Records: {patient.healthRecords.join(', ')}</p>
    </div>
  );
};

export default PatientDetail;