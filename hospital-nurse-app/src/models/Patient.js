import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    medicalHistory: { type: String },
    createdAt: { type: Date, default: Date.now },
    nurseId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Patient || mongoose.model('Patient', patientSchema);