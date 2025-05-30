import axios from 'axios';

const API_URL = 'http://localhost:5500/api';

// Patients API
export const fetchPatients = () => axios.get(`${API_URL}/patients`);
export const createPatient = (data) => axios.post(`${API_URL}/patients`, data);
export const updatePatient = (id, data) => axios.put(`${API_URL}/patients/${id}`, data);
export const deletePatient = (id) => axios.delete(`${API_URL}/patients/${id}`);

// Medications API
export const fetchMedications = () => axios.get(`${API_URL}/medications`);
export const createMedication = (data) => axios.post(`${API_URL}/medications`, data);
export const updateMedication = (id, data) => axios.put(`${API_URL}/medications/${id}`, data);
export const deleteMedication = (id) => axios.delete(`${API_URL}/medications/${id}`);

// Health Records API
export const fetchHealthRecords = () => axios.get(`${API_URL}/healthRecords`);
export const createHealthRecord = (data) => axios.post(`${API_URL}/healthRecords`, data);
export const updateHealthRecord = (id, data) => axios.put(`${API_URL}/healthRecords/${id}`, data);
export const deleteHealthRecord = (id) => axios.delete(`${API_URL}/healthRecords/${id}`);

// Users API
export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (data) => axios.post(`${API_URL}/users`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);