const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nurseApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Schemas
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
});

const healthRecordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  record: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Patient = mongoose.model('Patient', patientSchema);
const Medication = mongoose.model('Medication', medicationSchema);
const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
const User = mongoose.model('User', userSchema);

// API Routes for Patients
app.get('/api/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.post('/api/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.json(newPatient);
});

app.put('/api/patients/:id', async (req, res) => {
  const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPatient);
});

app.delete('/api/patients/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// API Routes for Medications
app.get('/api/medications', async (req, res) => {
  const medications = await Medication.find();
  res.json(medications);
});

app.post('/api/medications', async (req, res) => {
  const newMedication = new Medication(req.body);
  await newMedication.save();
  res.json(newMedication);
});

app.put('/api/medications/:id', async (req, res) => {
  const updatedMedication = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMedication);
});

app.delete('/api/medications/:id', async (req, res) => {
  await Medication.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// API Routes for Health Records
app.get('/api/healthRecords', async (req, res) => {
  const healthRecords = await HealthRecord.find().populate('patientId');
  res.json(healthRecords);
});

app.post('/api/healthRecords', async (req, res) => {
  const newHealthRecord = new HealthRecord(req.body);
  await newHealthRecord.save();
  res.json(newHealthRecord);
});

app.put('/api/healthRecords/:id', async (req, res) => {
  const updatedHealthRecord = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedHealthRecord);
});

app.delete('/api/healthRecords/:id', async (req, res) => {
  await HealthRecord.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// API Routes for Users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

app.put('/api/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});