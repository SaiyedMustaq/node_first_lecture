const http = require("http");
const requestHandler = require("./routes");
const serve = http.createServer(requestHandler);

serve.listen(3000);
