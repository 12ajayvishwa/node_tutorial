const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify({ name: 'Ajay', email: 'ajay@test.com' }));
    res.end();
}).listen(3000)