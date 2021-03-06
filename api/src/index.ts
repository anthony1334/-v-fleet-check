import * as http from 'http'
import * as debug from 'debug'

import App from './App'

/**
 * Create a node server
 * and bootstrap to App class
 */

debug('ts-express:server')

const normalizePort = (val: number | string): number | string | boolean => {
    let port: number = (typeof val === 'string') ? parseInt(val, 10): val;

    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
}

const onError = (error: NodeJS.ErrnoException): void => {
    if (error.syscall !== 'listen') throw error;

    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} nécessite des privilèges élevés`);
            process.exit(1);
        break;

        case 'EADDRINUSE':
            console.log(`${bind} est déjà en cours d'utilisation...`);
            process.exit(1);
        break;

        default:
            throw(error);
    }
}

const onListening = (): void => {
    let addr = server.address();
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    debug(`Ecoute sur ${bind}`);
}

const port = normalizePort(process.env.PORT || 3000)

App.set('port', port)

const server = http.createServer(App)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

