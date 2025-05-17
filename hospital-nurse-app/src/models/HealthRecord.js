import mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    temperature: { type: Number },
    bloodPressure: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.HealthRecord || mongoose.model('HealthRecord', healthRecordSchema);