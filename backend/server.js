const http = require('http');
const app = require('./app');

/**
 * Fontion normalizePort
 * Permet d'être sûr d'avoir un Number en tant que port
 */

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);

const address = server.address();

const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${port}`;
/**
 * Fonction errorHandler
 * recherche les différentes erreurs et les gère
 */
const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind}+ ' is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', errorHandler);
server.on('listening', () => {
  console.log(`Listening on ${bind}`);
});

server.listen(port);
