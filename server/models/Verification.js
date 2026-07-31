import mongoose from 'mongoose';

const VerificationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  applicantName: { type: String, required: true },
  applicantType: { type: String, required: true },
  city: String,
  submittedDate: String,
  documents: [String],
  status: { type: String, enum: ['Pending Review', 'Approved', 'Rejected'], default: 'Pending Review' },
  riskScore: String
}, { timestamps: true });

export default mongoose.models.Verification || mongoose.model('Verification', VerificationSchema);
