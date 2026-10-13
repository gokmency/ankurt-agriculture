import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const OUT_DIR = path.resolve('out');
const PORT = Number(process.env.PORT || 3333);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let reqPath;
  try { reqPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400); return res.end('Bad request'); }
  if (reqPath.includes('..')) { res.writeHead(400); return res.end('Bad request'); }
  let status = 200;
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  let filePath = path.join(OUT_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    status = 404;
    filePath = path.join(OUT_DIR, '404.html');
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const fileBuffer = fs.readFileSync(filePath);

  const headers = {
    'Content-Type': contentType,
    'Connection': 'keep-alive',
  };

  if (reqPath.startsWith('/_next/static/')) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  } else if (reqPath.startsWith('/images/')) {
    headers['Cache-Control'] = 'public, max-age=3600, must-revalidate';
  } else {
    headers['Cache-Control'] = 'public, max-age=0, must-revalidate';
  }

  const acceptEncoding = req.headers['accept-encoding'] || '';
  const isCompressible = contentType.startsWith('text/') || contentType.startsWith('application/javascript') || contentType.startsWith('application/json');

  if (isCompressible && acceptEncoding.includes('gzip')) {
    headers['Content-Encoding'] = 'gzip';
    res.writeHead(status, headers);
    res.end(zlib.gzipSync(fileBuffer));
  } else {
    headers['Content-Length'] = fileBuffer.length;
    res.writeHead(status, headers);
    res.end(fileBuffer);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
