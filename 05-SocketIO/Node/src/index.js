const { Server } = require("socket.io");

const connectSocketIO = () => {
  const io = new Server({
    cors: {
      origin: "*",
      credentials: true,
      methods: ['GET', 'POST']
    }
  });

  io.on("connect", (socket) => {
    console.log('Server Connect With Socket Id: ', socket.id);

    io.emit("event-a", "msg Send"); // Send all
    // socket.broadcast.emit("event-a", "msg Send"); // Send all exept itself

    socket.on("message", ({ room, message }) => {
      console.log({ room, message });

      io.to(room).emit("Recived Message", message)
    });
  });


  io.listen(8080
  //   , () => {
  //   console.log('SocketIO Server Stated In Port 8080')
  // }
  );
}


connectSocketIO();
