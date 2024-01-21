const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Map file extensions to content types
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
    };

    // Determine the file path based on the requested URL
    const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);

    // Read the file
    fs.readFile(path.join(__dirname, filePath), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            const ext = path.extname(filePath);
            const contentType = contentTypes[ext] || 'text/plain';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
