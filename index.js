const http = require('http');

function dataControl(req, res) {
    res.write('<h3>Hello this is ajay</h3>');
    res.end();
}

http.createServer(dataControl).listen(3000);