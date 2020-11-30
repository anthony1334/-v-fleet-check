"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const App_1 = require("./App");
/**
 * Create a node server
 * and bootstrap to App class
 */
debug('ts-express:server');
const normalizePort = (val) => {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
};
const onError = (error) => {
    if (error.syscall !== 'listen')
        throw error;
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
            throw (error);
    }
};
const onListening = () => {
    let addr = server.address();
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    debug(`Ecoute sur ${bind}`);
};
const port = normalizePort(process.env.PORT || 3000);
App_1.default.set('port', port);
const server = http.createServer(App_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//# sourceMappingURL=index.js.map