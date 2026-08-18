// Centralized Backend API Service for Little Steps Childcare Platform

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Health Check API
export async function fetchApiHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    return await res.json();
  } catch (err) {
    console.warn('API Health Check Error:', err);
    return { success: false, dbStatus: 'In-Memory Mode' };
  }
}

// Daycare Centers API
export async function fetchCenters() {
  try {
    const res = await fetch(`${API_BASE_URL}/centers`);
    return await res.json();
  } catch (err) {
    console.warn('Fetch Centers API Error:', err);
    return { success: false, data: [] };
  }
}

export async function updateCenterDetails(centerId, centerData) {
  try {
    const res = await fetch(`${API_BASE_URL}/centers/${centerId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(centerData)
    });
    return await res.json();
  } catch (err) {
    console.warn('Update Center API Error:', err);
    return { success: false };
  }
}

// Bookings API
export async function fetchBookings() {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings`);
    return await res.json();
  } catch (err) {
    console.warn('Fetch Bookings API Error:', err);
    return { success: false, data: [] };
  }
}

export async function createNewBooking(bookingData) {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });
    return await res.json();
  } catch (err) {
    console.warn('Create Booking API Error:', err);
    return { success: false };
  }
}

export async function updateBookingStatus(bookingId, status) {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    return await res.json();
  } catch (err) {
    console.warn('Update Booking Status API Error:', err);
    return { success: false };
  }
}

// Verification Queue API (Admin)
export async function fetchVerificationQueue() {
  try {
    const res = await fetch(`${API_BASE_URL}/verification`);
    return await res.json();
  } catch (err) {
    console.warn('Fetch Verification Queue API Error:', err);
    return { success: false, data: [] };
  }
}

export async function updateVerificationStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE_URL}/verification/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    return await res.json();
  } catch (err) {
    console.warn('Update Verification Status API Error:', err);
    return { success: false };
  }
}

// Analytics API
export async function fetchAnalytics() {
  try {
    const res = await fetch(`${API_BASE_URL}/analytics`);
    return await res.json();
  } catch (err) {
    console.warn('Fetch Analytics API Error:', err);
    return { success: false };
  }
}
