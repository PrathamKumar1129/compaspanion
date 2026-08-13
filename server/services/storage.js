const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const bookingsFile = path.join(dataDir, 'bookings.json');
const bookingsCsvFile = path.join(dataDir, 'bookings.csv');
const newsletterFile = path.join(dataDir, 'newsletter.json');

function ensureDataFiles(enabled = true) {
  if (!enabled) return;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(bookingsFile)) fs.writeFileSync(bookingsFile, '[]\\n');
  if (!fs.existsSync(bookingsCsvFile)) {
    fs.writeFileSync(bookingsCsvFile, 'id,timestamp,destinations,startDate,endDate,adults,children,budget,tripType,specialReq,name,email,phone,contactTime\\n');
  }
  if (!fs.existsSync(newsletterFile)) fs.writeFileSync(newsletterFile, '[]\\n');
}

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return []; }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\\n');
}

function appendBookingCsv(record) {
  const values = [
    record.id, record.timestamp, record.destinations, record.startDate, record.endDate,
    record.adults, record.children, record.budget, record.tripType, record.specialReq,
    record.name, record.email, record.phone, record.contactTime
  ].map(value => {
    if (value == null) return '';
    const field = String(value).replace(/"/g, '""');
    return field.includes(',') || field.includes('"') || field.includes('\\n') ? '"' + field + '"' : field;
  });
  fs.appendFileSync(bookingsCsvFile, values.join(',') + '\\n');
}

module.exports = { bookingsFile, bookingsCsvFile, newsletterFile, ensureDataFiles, readJson, writeJson, appendBookingCsv };
