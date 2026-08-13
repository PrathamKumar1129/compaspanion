const { Readable } = require('stream');
const { createBooking } = require('../server/controllers/bookingController');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const body =
    typeof req.body === 'string'
      ? req.body
      : JSON.stringify(req.body || {});

  const streamRequest = Readable.from([body]);

  streamRequest.method = req.method;
  streamRequest.headers = req.headers;
  streamRequest.url = req.url;

  try {
    await createBooking(streamRequest, res, (response, statusCode, payload) => {
      return response.status(statusCode).json(payload);
    });
  } catch (error) {
    console.error('Booking API error:', error);

    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
};