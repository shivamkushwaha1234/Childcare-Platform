import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  centerId: { type: String, required: true },
  centerName: { type: String, required: true },
  parentName: { type: String, required: true },
  childName: { type: String, required: true },
  planType: { type: String, required: true },
  timing: String,
  date: String,
  status: { type: String, enum: ['Confirmed', 'Pending', 'Active', 'Completed', 'Cancelled', 'Rejected'], default: 'Confirmed' },
  amount: { type: Number, required: true },
  paymentStatus: String,
  specialNotes: String
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
