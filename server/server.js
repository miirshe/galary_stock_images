const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8000;
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '../client/index.html')
    switch (req.url) {
        case '/':
        case '/index.html':
        case '/index':
            if (!fs.existsSync(filePath)) {
                console.log('OPPS! 404 Not Found');
                res.statusCode = 404;
                res.end();
                return;
            }
            const homepage = fs.readFileSync(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(homepage)
            res.end();
            break;
        case '/upload':
            res.statusCode = 200;
            res.write('<h1>we working on it </h1>')
            res.end()
        default:
            console.log('OPPS! 500 Server Error');
            res.statusCode = 500;
            res.end();
            break;

    }
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})