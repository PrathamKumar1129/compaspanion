const fs = require('fs');
const { bookingsFile, bookingsCsvFile, newsletterFile, feedbackFile, readJson } = require('../services/storage');
const { list, testConnection } = require('../services/supabase');
const { storageMode, useDatabase, useFiles } = require('../config');
const { createBooking } = require('../controllers/bookingController');
const { createSubscriber } = require('../controllers/newsletterController');
const { createFeedback } = require('../controllers/feedbackController');

function registerApi(req, res, url, sendJson) {
  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { status: 'ok' }); return true;
  }
  if (req.method === 'GET' && url.pathname === '/api/db/health') {
    testConnection()
      .then(result => sendJson(res, 200, { status: 'ok', databaseTime: result.now }))
      .catch(error => {
        console.error(error.message);
        sendJson(res, 500, { status: 'error', error: 'Database connection failed' });
      });
    return true;
  }
  if (req.method === 'GET' && url.pathname === '/api/bookings') {
    if (useDatabase) list('bookings').then(rows => sendJson(res, 200, rows)).catch(() => sendJson(res, 500, { error: 'Could not read bookings from database' }));
    else sendJson(res, 200, readJson(bookingsFile));
    return true;
  }
  if (req.method === 'GET' && url.pathname === '/api/bookings.csv') {
    if (!useFiles) { sendJson(res, 404, { error: 'CSV storage is disabled', storageMode }); return true; }
    res.writeHead(200, {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="bookings.csv"',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(bookingsCsvFile).pipe(res); return true;
  }
  if (req.method === 'POST' && url.pathname === '/api/bookings') {
    createBooking(req, res, sendJson); return true;
  }
  if (req.method === 'GET' && url.pathname === '/api/newsletter') {
    if (useDatabase) list('newsletter').then(rows => sendJson(res, 200, rows)).catch(() => sendJson(res, 500, { error: 'Could not read newsletter subscribers from database' }));
    else sendJson(res, 200, readJson(newsletterFile));
    return true;
  }
  if (req.method === 'POST' && url.pathname === '/api/newsletter') {
    createSubscriber(req, res, sendJson); return true;
  }
  if (req.method === 'GET' && url.pathname === '/api/feedback') {
    if (useDatabase) {
      list('feedback')
        .then(rows => sendJson(res, 200, rows.map(row => ({
          id: row.id, name: row.name, trip: row.trip, rating: row.rating,
          text: row.message, createdAt: row.created_at
        }))))
        .catch(() => sendJson(res, 500, { error: 'Could not read feedback from database' }));
    } else {
      sendJson(res, 200, readJson(feedbackFile));
    }
    return true;
  }
  if (req.method === 'POST' && url.pathname === '/api/feedback') {
    createFeedback(req, res, sendJson); return true;
  }
  return false;
}

module.exports = { registerApi };
