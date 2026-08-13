const logger = require('../logger');
const pool = require('../db');

async function insert(tableName, payload) {
  logger.debug({ event: 'database_insert_started', table: tableName }, 'Starting PostgreSQL insert');
  if (tableName === 'bookings') {
    const query = `
      INSERT INTO bookings (
        id, "timestamp", destinations, "startDate", "endDate", adults,
        children, budget, "tripType", "specialReq", name, email, phone, "contactTime"
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
      )
      RETURNING *
    `;
    const values = [
      payload.id, payload.timestamp, payload.destinations, payload.startDate,
      payload.endDate, payload.adults, payload.children, payload.budget,
      payload.tripType, payload.specialReq, payload.name, payload.email,
      payload.phone, payload.contactTime
    ];
    return pool.query(query, values);
  }
  if (tableName === 'newsletter') {
    return pool.query(
      'INSERT INTO newsletter (id, email, created_at) VALUES ($1, $2, $3) RETURNING *',
      [payload.id, payload.email, payload.created_at]
    );
  }
  throw new Error('Unsupported database table: ' + tableName);
}

async function testConnection() {
  logger.debug({ event: 'database_health_check' }, 'Checking PostgreSQL connection');
  const result = await pool.query('SELECT NOW() AS now');
  return result.rows[0];
}

async function list(tableName) {
  if (!['bookings', 'newsletter'].includes(tableName)) {
    throw new Error('Unsupported database table: ' + tableName);
  }
  const result = await pool.query(`SELECT * FROM ${tableName} ORDER BY created_at DESC`);
  return result.rows;
}

module.exports = { insert, list, testConnection };
