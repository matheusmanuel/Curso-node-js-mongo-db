const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Jhohn doe",
        email: "jhohn@doe.com",
      },
      {
        name: "Jane doe",
        email: "jane@doe.com",
      },
    ];
    res.writeHead(200, {"Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Server rodando na porta ${port}`));
