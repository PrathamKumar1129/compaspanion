require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const logger = require('./logger');
const { ensureDataFiles } = require('./services/storage');
const { useFiles } = require('./config');
const { registerApi } = require('./routes/api');

const PORT = process.env.PORT || 3000;
const clientDir = path.join(__dirname, '..', 'client');
const shouldOpenBrowser = process.argv.includes('--open');
const browserUrl = 'http://localhost:' + PORT;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });
  res.end(JSON.stringify(payload));
}

function serveStatic(req, res) {
  let requestedPath = req.url.split('?')[0];
  if (requestedPath === '/') requestedPath = '/index.html';
  let relativePath;
  try { relativePath = decodeURIComponent(requestedPath); } catch {
    sendJson(res, 400, { error: 'Invalid path' }); return;
  }
  const absolutePath = path.resolve(clientDir, '.' + path.normalize(relativePath));
  if (absolutePath !== clientDir && !absolutePath.startsWith(clientDir + path.sep)) {
    sendJson(res, 403, { error: 'Forbidden' }); return;
  }
  fs.stat(absolutePath, (error, stats) => {
    if (error || !stats.isFile()) { sendJson(res, 404, { error: 'Not found' }); return; }
    res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(absolutePath).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(absolutePath).pipe(res);
  });
}

function openBrowser(url) {
  const command = process.platform === 'win32' ? 'cmd.exe' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '""', url] : [url];
  const browser = spawn(command, args, { detached: true, stdio: 'ignore', windowsHide: true });
  browser.unref();
  logger.info({ event: 'browser_open_requested', url }, 'Opening Compasspanion in the browser');
}

const server = http.createServer((req, res) => {
  const startedAt = process.hrtime.bigint();
  res.once('finish', () => {
    logger.info({
      event: 'http_request',
      method: req.method,
      path: req.url.split('?')[0],
      statusCode: res.statusCode,
      durationMs: Number(process.hrtime.bigint() - startedAt) / 1e6
    }, 'HTTP request completed');
  });

  try {
    ensureDataFiles(useFiles);
    const url = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type,Authorization' });
      res.end(); return;
    }
    if (registerApi(req, res, url, sendJson)) return;
    serveStatic(req, res);
  } catch (error) {
    logger.error({ event: 'request_error', err: error }, 'Unhandled request error');
    if (!res.headersSent) sendJson(res, 500, { error: 'Internal server error' });
  }
});

server.listen(PORT, () => {
  logger.info({ event: 'server_started', port: PORT, clientDir }, 'Compasspanion server started');
  if (shouldOpenBrowser) setTimeout(() => openBrowser(browserUrl), 250);
});

process.on('SIGTERM', () => {
  logger.info({ event: 'server_stopping' }, 'Compasspanion server stopping');
  server.close(() => process.exit(0));
});
