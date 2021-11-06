import socketClient from "socket.io-client";

const SERVER = "http://localhost:5000";

let socket;

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("connected succesfully connected with server");
    console.log(socket.id);
  });
};
