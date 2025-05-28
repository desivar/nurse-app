import React, { useEffect, useState } from 'react';
import { fetchHealthRecords, createHealthRecord, updateHealthRecord, deleteHealthRecord } from '../api';
import HealthRecordForm from './HealthRecordForm';

const HealthRecordList = () => {
  const [healthRecords, setHealthRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    const loadHealthRecords = async () => {
      const response = await fetchHealthRecords();
      setHealthRecords(response.data);
    };
    loadHealthRecords();
  }, []);

  const handleAddOrUpdate = async (record) => {
    if (editingRecord) {
      await updateHealthRecord(editingRecord._id, record);
    } else {
      await createHealthRecord(record);
    }
    setEditingRecord(null);
    const response = await fetchHealthRecords();
    setHealthRecords(response.data);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
  };

  const handleDelete = async (id) => {
    await deleteHealthRecord(id);
    const response = await fetchHealthRecords();
    setHealthRecords(response.data);
  };

  return (
    <div>
      <h1>Health Records</h1>
      <HealthRecordForm record={editingRecord} onSubmit={handleAddOrUpdate} />
      <ul>
        {healthRecords.map(record => (
          <li key={record._id}>
            {record.record}
            <button onClick={() => handleEdit(record)}>Edit</button>
            <button onClick={() => handleDelete(record._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthRecordList;