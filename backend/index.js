const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/signup" && req.method === "POST") {
    // Database connection
    res.write("Signed up");
    res.end();
  }
  if (req.url === "/signin" && req.method === "GET") {
    // Database connection
    res.write("Login");
    res.end();
  }
  
  if (req.url === "/username" && req.method === "GET") {
    // Database connection
    res.write("abdullah");
    res.end();
  }
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log("Server is running on 5000");
});

