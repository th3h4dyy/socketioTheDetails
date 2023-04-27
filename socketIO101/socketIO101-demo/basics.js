const express = require("express");
const socketio = require("socket.io");

const app = express();

app.use(express.static(`${__dirname}/public`));

const expressServer = app.listen(3000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "welcome to our socket server" });
  socket.on("messageFromClient", (data) => {
    console.log(data);
  });
});
