import React, { useState, useEffect } from 'react';

const HealthRecordForm = ({ record, onSubmit }) => {
  const [patientId, setPatientId] = useState('');
  const [recordText, setRecordText] = useState('');

  useEffect(() => {
    if (record) {
      setPatientId(record.patientId);
      setRecordText(record.record);
    } else {
      setPatientId('');
      setRecordText('');
    }
  }, [record]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ patientId, record: recordText });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />
      <textarea
        placeholder="Health Record"
        value={recordText}
        onChange={(e) => setRecordText(e.target.value)}
        required
      />
      <button type="submit">{record ? 'Update' : 'Add'} Health Record</button>
    </form>
  );
};

export default HealthRecordForm;