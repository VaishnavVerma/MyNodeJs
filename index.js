const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("HomePage");
                break;
            case '/about':
                res.end("About page");
                break;
            default:
                res.end("Hello server, I'm Vaishanv verma");
        }
    });
    console.log(req.url);
});

myServer.listen(5000, () => console.log("Server started on port 5000"));
