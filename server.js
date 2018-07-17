const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const constantes = require('./config/constantes');

const cleanup = require('./config/cleanup');

cleanup.cleanup(() => console.log('app terminated'));

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, './dist')));

// V1 ROUTES
// Admin API routes
app.use('/v1', require('./routes/producto'), function (req, res) {
  res.sendStatus(404);
});

// API Fallback
app.use('/v1', function (req, res) {
  res.sendStatus(404);
});

/**
 * Get port from environment and store in Express.
 */
const port = constantes.config.PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
cleanup.server = server;
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Tienda ocsa backend listening on port: ${port}`));
