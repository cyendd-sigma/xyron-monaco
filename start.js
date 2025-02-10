const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;

// Serve the index.html file from the current directory
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "index.html");
  const htmlContent = fs.readFileSync(indexPath, "utf8");
  res.type('html').send(htmlContent);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
