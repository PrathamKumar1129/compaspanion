require('dotenv').config({ path: require('path').join(__dirname, '..', '..', '.env') });

const fs = require('fs');
const path = require('path');
const pool = require('../db');

async function migrate() {
  const migrationsDir = path.join(__dirname, '..', '..', 'supabase', 'migrations');
  const migrations = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort();

  if (migrations.length === 0) {
    console.log('No SQL migrations found.');
    return;
  }

  for (const migration of migrations) {
    const sql = fs.readFileSync(path.join(migrationsDir, migration), 'utf8');
    console.log(`Applying ${migration}...`);
    await pool.query(sql);
    console.log(`Applied ${migration}`);
  }
}

migrate()
  .then(() => pool.end())
  .catch(async error => {
    console.error('Migration failed:', error.message);
    await pool.end();
    process.exitCode = 1;
  });
