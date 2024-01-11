// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const express = require("express"); 

// const myServer = http.createServer((req, res) => {
//     const myUrl = url.parse(req.url, true);
//     const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//         }
//     });

//     switch (myUrl.pathname) {
//         case '/':
//             if (req.method === "GET")
//             res.end("HomePage");
//             break;
//         case '/search':
//             const search = myUrl.query.search_query;
//             res.end("Here are search results for " + search);
//             break;
//         case '/signup':
//             if (req.method === "GET") {
//                 res.end("This is a signup Form");
//             } else if (req.method === "POST") {
//                 // Handle POST data or perform database query
//                 res.end("Success");
//             } else {
//                 res.writeHead(405, { 'Content-Type': 'text/plain' });
//                 res.end("Method Not Allowed");
//             }
//             break;
//         case '/about':
//             const username = myUrl.query.myname;
//             res.end(`About page. Username: ${username}`);
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end("Error 404: Page not found");
//     }

//     console.log(req.url);
// });

// myServer.listen(5000, () => console.log("Server started on port 5000"));


// GET req - When you want to get data from the server
// POST req - When you want to send and mute some data in server
// PUT req - ex. for uploading photos
// PATCH req - for changing somthing in database
// DELETE req - IF you want to delete somthing from database


// after importing express not we can make our work easier 


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})