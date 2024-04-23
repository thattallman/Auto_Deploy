const express = require("express");
const app = express();
const cors = require("cors");
const { Redis } = require("ioredis");
const { createServer } = require("http");
const client = new Redis();
const { Server } = require("socket.io");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const server = createServer(app);
const io = new Server(server);
io.on("connection", (socket) => console.log("a user is connected")); // Corrected spelling of 'socket'

client.subscribe("dockerUpdates", (err, count) => {
  if (err) {
    console.error("Error subscribing to channel:", err);
  } else {
    console.log(
      `Subscribed successfully! Currently subscribed to ${count} channels.`
    );
  }
});

// Listen for messages
client.on("message", (channel, message) => {
  console.log(`Received message from Redis channel ${channel}: ${message}`);
  io.emit("redisMessage", message);
});

// Handle errors
client.on("error", (err) => {
  console.error("Redis error:", err);
  io.emit("redisMessage", message); // This line seems incorrect, you're trying to access 'message' which is not defined here
});

server.listen(8001, () => {
  console.log("server running at http://localhost:8001");
});
