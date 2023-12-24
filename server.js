var express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 5500;
const path = require("path");

app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public.html"));
});

app.listen(port, hostname, () => {
  console.log(` Server Successfully started on http://${hostname}:${port}`);
});

