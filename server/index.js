import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Center from './models/Center.js';
import Booking from './models/Booking.js';
import Verification from './models/Verification.js';
import { 
  INITIAL_DAYCARE_CENTERS, 
  INITIAL_BOOKINGS, 
  INITIAL_VERIFICATION_QUEUE, 
  PLATFORM_ANALYTICS 
} from '../src/data/mockData.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/littlesteps_childcare';

app.use(cors());
app.use(express.json());

let isMongoConnected = false;

// Fallback in-memory arrays when MongoDB is disconnected
let memoryCenters = [...INITIAL_DAYCARE_CENTERS];
let memoryBookings = [...INITIAL_BOOKINGS];
let memoryVerification = [...INITIAL_VERIFICATION_QUEUE];

// MongoDB Connection & Auto-Seed Function
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 3000 });
    isMongoConnected = true;
    console.log('🍃 Connected to MongoDB Database successfully (littlesteps_childcare)');

    // Seed Centers if collection empty
    const countCenters = await Center.countDocuments();
    if (countCenters === 0) {
      await Center.insertMany(INITIAL_DAYCARE_CENTERS);
      console.log('🌱 Seeded initial Daycare Centers into MongoDB');
    }

    // Seed Bookings if collection empty
    const countBookings = await Booking.countDocuments();
    if (countBookings === 0) {
      await Booking.insertMany(INITIAL_BOOKINGS);
      console.log('🌱 Seeded initial Bookings into MongoDB');
    }

    // Seed Verification Queue if collection empty
    const countVer = await Verification.countDocuments();
    if (countVer === 0) {
      await Verification.insertMany(INITIAL_VERIFICATION_QUEUE);
      console.log('🌱 Seeded initial Verification Queue into MongoDB');
    }
  } catch (err) {
    isMongoConnected = false;
    console.log('⚠️ MongoDB connection offline. Operating with Express In-Memory REST API mode.');
  }
}

connectDB();

// ---------------- REST API ENDPOINTS ---------------- //

// API Health Check
app.get('/api/health', async (req, res) => {
  res.json({
    status: 'OK',
    dbStatus: isMongoConnected ? 'MongoDB Connected' : 'In-Memory Mode',
    timestamp: new Date()
  });
});

// GET Daycare Centers
app.get('/api/centers', async (req, res) => {
  try {
    if (isMongoConnected) {
      const data = await Center.find({});
      return res.json({ success: true, db: 'MongoDB', count: data.length, data });
    }
    res.json({ success: true, db: 'InMemory', count: memoryCenters.length, data: memoryCenters });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET Single Center by ID
app.get('/api/centers/:id', async (req, res) => {
  try {
    if (isMongoConnected) {
      const center = await Center.findOne({ id: req.params.id });
      if (!center) return res.status(404).json({ success: false, error: 'Center not found' });
      return res.json({ success: true, data: center });
    }
    const center = memoryCenters.find(c => c.id === req.params.id);
    if (!center) return res.status(404).json({ success: false, error: 'Center not found' });
    res.json({ success: true, data: center });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Center Details & Pricing
app.put('/api/centers/:id', async (req, res) => {
  try {
    if (isMongoConnected) {
      const updated = await Center.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
      return res.json({ success: true, message: 'Center updated in MongoDB', data: updated });
    }
    const idx = memoryCenters.findIndex(c => c.id === req.params.id);
    if (idx !== -1) memoryCenters[idx] = { ...memoryCenters[idx], ...req.body };
    res.json({ success: true, message: 'Center updated', data: memoryCenters[idx] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET Bookings
app.get('/api/bookings', async (req, res) => {
  try {
    if (isMongoConnected) {
      const data = await Booking.find({}).sort({ createdAt: -1 });
      return res.json({ success: true, count: data.length, data });
    }
    res.json({ success: true, count: memoryBookings.length, data: memoryBookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE Booking
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed',
      ...req.body
    };

    if (isMongoConnected) {
      const created = await Booking.create(bookingData);
      return res.status(201).json({ success: true, message: 'Booking saved to MongoDB', data: created });
    }

    memoryBookings.unshift(bookingData);
    res.status(201).json({ success: true, message: 'Booking created', data: bookingData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE Booking Status (Accept / Cancel / Reject)
app.patch('/api/bookings/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (isMongoConnected) {
      const updated = await Booking.findOneAndUpdate({ id: req.params.id }, { status }, { new: true });
      return res.json({ success: true, message: `Booking status updated to ${status}`, data: updated });
    }
    const b = memoryBookings.find(item => item.id === req.params.id);
    if (b) b.status = status;
    res.json({ success: true, message: `Booking status updated to ${status}`, data: b });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ADMIN Verification Queue
app.get('/api/verification', async (req, res) => {
  try {
    if (isMongoConnected) {
      const data = await Verification.find({});
      return res.json({ success: true, data });
    }
    res.json({ success: true, data: memoryVerification });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.patch('/api/verification/:id', async (req, res) => {
  try {
    const { status } = req.body;
    if (isMongoConnected) {
      const updated = await Verification.findOneAndUpdate({ id: req.params.id }, { status }, { new: true });
      return res.json({ success: true, message: `Verification status updated to ${status}`, data: updated });
    }
    const item = memoryVerification.find(v => v.id === req.params.id);
    if (item) item.status = status;
    res.json({ success: true, message: `Verification status updated to ${status}`, data: item });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ANALYTICS Endpoint
app.get('/api/analytics', async (req, res) => {
  res.json({
    success: true,
    data: {
      ...PLATFORM_ANALYTICS,
      databaseType: isMongoConnected ? 'MongoDB (Active)' : 'Express Seed DB',
      activeBookingsCount: memoryBookings.length,
      totalCentersCount: memoryCenters.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Little Steps 24x7 Express Backend API Server running on port ${PORT}`);
});
