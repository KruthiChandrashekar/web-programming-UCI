const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 3939;

const requestListener = function (req, res) {
  fs.readFile("./home-decor/index.html")
    .then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(404);
      res.end("File Not Found");
    });
};

const server = http.createServer(requestListener);
const log = function () {
  console.log(`Server is running on http://${host}:${port}`);
};

server.listen(port, host, log);
