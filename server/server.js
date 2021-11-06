const express = require("express");
const socket = require("socket.io");

const PORT = 5000;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let peers = [];
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.emit("connection", null);
  console.log("new user connected");
  console.log(socket.id);

  socket.on("reigister-new-user", (data) => {
    peers.push({
      username: data.username,
      socket: data.socketId,
    });
    console.log("new user registerd");
    console.log(peers);
  });
});
