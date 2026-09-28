const { randomUUID } = require('crypto');
const logger = require('../logger');
const { feedbackFile, readJson, writeJson } = require('../services/storage');
const { insert } = require('../services/supabase');
const { storageMode, useDatabase, useFiles } = require('../config');
const { parseJsonBody } = require('./bookingController');

function createFeedback(req, res, sendJson, options = {}) {
  parseJsonBody(req, async payload => {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return sendJson(res, 400, { error: 'Invalid JSON payload' });
    }

    const name = String(payload.name || '').trim();
    const trip = String(payload.trip || '').trim();
    const text = String(payload.text || '').trim();
    const rating = Number(payload.rating);
    const id = String(payload.id || randomUUID());

    if (!name || name.length > 60 || trip.length > 80 || !text || text.length > 500 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return sendJson(res, 400, { error: 'Provide a name (up to 60 characters), optional trip (up to 80), feedback (up to 500), and a rating from 1 to 5' });
    }
    if (id.length > 100 || !/^[a-zA-Z0-9_-]+$/.test(id)) {
      return sendJson(res, 400, { error: 'Invalid feedback ID' });
    }

    const requestedDate = Date.parse(payload.createdAt || '');
    const record = {
      id, name, trip, text, rating,
      createdAt: Number.isNaN(requestedDate) ? new Date().toISOString() : new Date(requestedDate).toISOString()
    };
    const saveToFiles = options.useFiles ?? useFiles;
    const saveToDatabase = options.useDatabase ?? useDatabase;

    try {
      if (saveToFiles) {
        const storedFeedback = readJson(feedbackFile);
        const feedback = Array.isArray(storedFeedback) ? storedFeedback : [];
        if (!feedback.some(item => item.id === id)) {
          feedback.unshift(record);
          writeJson(feedbackFile, feedback);
        }
      }
      if (saveToDatabase) {
        await insert('feedback', {
          id: record.id, name: record.name, trip: record.trip, rating: record.rating,
          message: record.text, created_at: record.createdAt
        });
      }
      logger.info({ event: 'feedback_saved', feedbackId: record.id, storageMode }, 'Feedback saved');
      sendJson(res, 201, { success: true, feedback: record });
    } catch (error) {
      logger.error({ event: 'feedback_save_error', feedbackId: record.id, err: error }, 'Feedback save failed');
      sendJson(res, 500, { success: false, error: 'Could not save feedback' });
    }
  });
}

module.exports = { createFeedback };
