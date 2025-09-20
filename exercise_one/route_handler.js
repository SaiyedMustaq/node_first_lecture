const fs = require("fs");
const requestHandler = (req, res) => {
  console.log("URL" + res.url);
  if (req.url == "/") {
    res.write("<html>");
    res.write("<h1>Hello</h1>");
    res.write("</html>");
    return res.end();
  }
  if (req.url == "/user") {
    res.write("<html>");
    res.write("<h1>Hello User</h1>");
    res.write("</html>");
    return res.end();
  }
};
module.exports = requestHandler;
