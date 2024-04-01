import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

function Chat() {
  const [mySocket, setMySocket] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const socket = useMemo(() => io("http://localhost:8080"), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket At Client: ", socket.id);
      setMySocket(socket.id);
    });

    socket.on("event-a", (msg) => {
      console.log(msg);
    });

    socket.on("Recived Message", (chatMessage) => {
      console.log(chatMessage);
      setChat((prev) => [...prev, chatMessage]);
    });

    console.log(chat)

    // return () => {
    //   socket.disconnect(); // Clean up socket connection when component unmounts
    // };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", { room: [mySocket, room], message });
    setMessage("");
  };

  return (
    <div className="chat-wrapper">
      <div>
        <h1>{mySocket}</h1>
        {chat.map((value, index) => (
          <p key={index} style={{textAlign: room[0] === mySocket ? 'right' : 'left'}}>{value}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
            name="room"
            placeholder="Enter Room"
          />
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            placeholder="Enter Massage"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
