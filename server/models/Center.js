import mongoose from 'mongoose';

const CaregiverSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  role: { type: String, required: true },
  exp: String,
  certified: { type: Boolean, default: true },
  avatar: String
});

const CenterSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  distance: String,
  is24x7: { type: Boolean, default: true },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 50 },
  verifiedStatus: { type: String, default: 'Government Verified' },
  safetyBadge: String,
  hourlyPrice: { type: Number, required: true },
  dailyPrice: { type: Number, required: true },
  monthlyPrice: { type: Number, required: true },
  capacityTotal: { type: Number, default: 20 },
  capacityAvailable: { type: Number, default: 5 },
  ageGroups: [String],
  timings: String,
  images: [String],
  description: String,
  safetyMeasures: [String],
  caregivers: [CaregiverSchema]
}, { timestamps: true });

export default mongoose.models.Center || mongoose.model('Center', CenterSchema);
