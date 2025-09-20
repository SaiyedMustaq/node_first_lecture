const http = require("http");
const requestHandler = require("./route_handler");
const server = http.createServer(requestHandler);

server.listen(3000);
