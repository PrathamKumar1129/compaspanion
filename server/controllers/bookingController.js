const logger = require('../logger');
const { bookingsFile, readJson, writeJson, appendBookingCsv } = require('../services/storage');
const { insert } = require('../services/supabase');
const { storageMode, useDatabase, useFiles } = require('../config');

function parseJsonBody(req, callback) {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    try { callback(body ? JSON.parse(body) : {}); } catch { callback(null); }
  });
}

function validateBooking(payload) {
  if (!payload.name || !payload.email || !payload.phone) return 'Name, Gmail address, and phone number are required';
  if (!/^[^\s@]+@gmail\.com$/i.test(String(payload.email))) return 'Email must be a valid Gmail address ending in @gmail.com';
  if (!/^\d+$/.test(String(payload.phone))) return 'Phone number must contain digits only';
  return null;
}

function createBooking(req, res, sendJson) {
  parseJsonBody(req, async payload => {
    if (!payload) {
      logger.warn({ event: 'booking_invalid_payload' }, 'Invalid booking JSON payload');
      return sendJson(res, 400, { error: 'Invalid JSON payload' });
    }
    const validationError = validateBooking(payload);
    if (validationError) {
      logger.warn({ event: 'booking_validation_failed', reason: validationError }, 'Booking validation failed');
      return sendJson(res, 400, { error: validationError });
    }
    const bookings = useFiles ? readJson(bookingsFile) : [];
    const record = Object.assign({ id: 'booking-' + Date.now() }, payload, { createdAt: new Date().toISOString() });
    if (useFiles) {
      bookings.push(record);
      writeJson(bookingsFile, bookings);
      appendBookingCsv(record);
      logger.info({ event: 'booking_local_saved', bookingId: record.id, bookingCount: bookings.length }, 'Booking saved locally');
    }
    try {
      if (useDatabase) await insert('bookings', {
        id: record.id, timestamp: record.timestamp, destinations: record.destinations,
        startDate: record.startDate, endDate: record.endDate, adults: record.adults,
        children: record.children, budget: record.budget, tripType: record.tripType,
        specialReq: record.specialReq, name: record.name, email: record.email,
        phone: record.phone, contactTime: record.contactTime
      });
      if (useDatabase) logger.info({ event: 'booking_database_saved', bookingId: record.id }, 'Booking saved to PostgreSQL');
      sendJson(res, 200, { success: true, storageMode, count: useFiles ? bookings.length : undefined });
    } catch (error) {
      logger.error({ event: 'booking_database_error', bookingId: record.id, err: error }, 'Booking database insert failed');
      sendJson(res, 500, { success: false, error: error.message, count: bookings.length });
    }
  });
}

module.exports = { createBooking, parseJsonBody };
