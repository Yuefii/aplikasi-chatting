const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("users connected");
  socket.on("disconnected", () => {
    console.log("users disconnected");
  });
  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });
});

server.listen(2000, () => {
  console.log("server telah running on http://localhost:2000");
});
