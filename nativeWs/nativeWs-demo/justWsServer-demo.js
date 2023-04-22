const http = require("http");
const websocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("I'm connected");
});

const wss = new websocket.WebSocketServer({
  server,
});

wss.on("headers", (headers, req) => {
  console.log(headers);
});

wss.on("connection", (ws, req) => {
  ws.on("message", (data) => {
    console.log(data.toString());
  });
  ws.send("Welcome to the websocket server!!");
});

server.listen(3000);
