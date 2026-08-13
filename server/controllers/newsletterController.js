const logger = require('../logger');
const { newsletterFile, readJson, writeJson } = require('../services/storage');
const { insert } = require('../services/supabase');
const { storageMode, useDatabase, useFiles } = require('../config');
const { parseJsonBody } = require('./bookingController');

function createSubscriber(req, res, sendJson) {
  parseJsonBody(req, async payload => {
    if (!payload) {
      logger.warn({ event: 'newsletter_invalid_payload' }, 'Invalid newsletter JSON payload');
      return sendJson(res, 400, { error: 'Invalid JSON payload' });
    }
    if (!payload.email || !/^[^\s@]+@gmail\.com$/i.test(String(payload.email))) {
      logger.warn({ event: 'newsletter_validation_failed' }, 'Newsletter email validation failed');
      return sendJson(res, 400, { error: 'Email must be a valid Gmail address ending in @gmail.com' });
    }
    const subscribers = useFiles ? readJson(newsletterFile) : [];
    const record = Object.assign({ id: 'subscriber-' + Date.now() }, payload, { createdAt: new Date().toISOString() });
    if (useFiles) {
      subscribers.push(record);
      writeJson(newsletterFile, subscribers);
      logger.info({ event: 'newsletter_local_saved', subscriberId: record.id, subscriberCount: subscribers.length }, 'Newsletter subscriber saved locally');
    }
    try {
      if (useDatabase) await insert('newsletter', { id: record.id, email: record.email, created_at: record.createdAt });
      if (useDatabase) logger.info({ event: 'newsletter_database_saved', subscriberId: record.id }, 'Newsletter subscriber saved to PostgreSQL');
      sendJson(res, 200, { success: true, storageMode, count: useFiles ? subscribers.length : undefined });
    } catch (error) {
      logger.error({ event: 'newsletter_database_error', subscriberId: record.id, err: error }, 'Newsletter database insert failed');
      sendJson(res, 500, { success: false, error: error.message, count: subscribers.length });
    }
  });
}

module.exports = { createSubscriber };
