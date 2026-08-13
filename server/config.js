const storageMode = String(process.env.STORAGE_MODE || 'both').toLowerCase();

if (!['database', 'both', 'files'].includes(storageMode)) {
  throw new Error('STORAGE_MODE must be one of: database, both, files');
}

module.exports = {
  storageMode,
  useDatabase: storageMode === 'database' || storageMode === 'both',
  useFiles: storageMode === 'files' || storageMode === 'both'
};
