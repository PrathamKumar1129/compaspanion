const { Readable } = require('stream');
const { createFeedback } = require('../server/controllers/feedbackController');
const { list } = require('../server/services/supabase');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method === 'GET') {
    try {
      const result = await list('feedback');
      return res.status(200).json(result.map(row => ({
        id: row.id,
        name: row.name,
        trip: row.trip,
        rating: row.rating,
        text: row.message,
        createdAt: row.created_at
      })));
    } catch (error) {
      console.error('Feedback list API error:', error);
      return res.status(500).json({ error: 'Could not read feedback' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
  const streamRequest = Readable.from([body]);
  streamRequest.method = req.method;
  streamRequest.headers = req.headers;
  streamRequest.url = req.url;

  try {
    await createFeedback(
      streamRequest,
      res,
      (response, statusCode, payload) => response.status(statusCode).json(payload),
      { useFiles: false, useDatabase: true }
    );
  } catch (error) {
    console.error('Feedback submission API error:', error);
    if (!res.headersSent) return res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
