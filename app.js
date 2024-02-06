// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem'),
//   passphrase: 'qwerty'
// };

// const server = https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('Hello, World!');
// });

// server.listen(3000, () => {
//   console.log('Сервер слушает порт 3000');
// });

// httpsServer.js
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 3000;

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
    passphrase: "qwerty",
};

const path = require('path')

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`HTTPS сервер слушает порт ${PORT}`);
});
