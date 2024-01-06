const http = require("http");
const fs = require("fs");
const url = require("url"); // Include the 'url' module

const myServer = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true); // Move this line inside the server callback

    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    switch (myUrl.pathname) {
        case '/':
            res.end("HomePage");
            break;

        case '/search':
            const search = myUrl.query.search_query;
            res.end("Here are search result for " + search);
        case '/about':
            const username = myUrl.query.myname;
            res.end(`About page. Username: ${username}`);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("Error 404: Page not found");
    }

    console.log(req.url);
});

myServer.listen(5000, () => console.log("Server started on port 5000"));
