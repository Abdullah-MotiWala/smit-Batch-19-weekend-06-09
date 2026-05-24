const http = require("http");

const users = [{ id: 1, name: "Ali", age: 24 }];
let lastAddedID = 1;

const server = http.createServer((req, res) => {
  if (req.url === "/user" && req.method === "POST") {
    req.on("data", (chunk) => {
      const result = chunk;
      const body = JSON.parse(result);
      users.push({ ...body, id: ++lastAddedID });
      res.write(JSON.stringify({ id: lastAddedID }));
      res.end();
    });
  }
  if (req.url.includes("/user") && req.method === "GET") {
    const id = req.url.split("?")[1].split("=")[1];
    const user = users.find((u) => u.id == id);
    if (user) {
      res.write(JSON.stringify(user));
    }
    res.end();
  }
  if (req.url.includes("/user") && req.method === "DELETE") {
    const id = req.url.split("?")[1].split("=")[1];
    const userIndex = users.findIndex((u) => u.id == id);
    users.splice(userIndex, 1);
    res.write("user deleted");
    res.end();
  }
  if (req.url.includes("/user") && req.method === "PUT"){
    const id = req.url.split("?")[1].split("=")[1];
    const userIndex = users.findIndex((u) => u.id == id);
    req.on("data", (chunk) => {
      const result = chunk;
      const body = JSON.parse(result);
      users[userIndex] = {...body, id}
      res.write(JSON.stringify({ id: lastAddedID }));
      res.end();
    })
  }
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log("Server is listening on 5000");
});
