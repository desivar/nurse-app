import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    schedule: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Medication || mongoose.model('Medication', medicationSchema);