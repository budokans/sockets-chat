import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // socket.on("user joins", () => {
  const joinAlert = "Someone joined the chat.";
  socket.broadcast.emit("connection", joinAlert);
  // });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
