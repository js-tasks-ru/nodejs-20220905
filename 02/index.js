const http = require('node:http');
const fs = require('node:fs');

const server = new http.Server();

// server.on('connection', (socket) => { // socket - Duplex stream
        // socket.on('data', chunk => ...)
        // socket.write('...');
// });

// button.addEventListener('click', (event) => {});
server.on('request', (req, res) => {
    
});

server.listen(3000);