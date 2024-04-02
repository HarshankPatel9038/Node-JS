import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

function Chat() {
  const [mySocket, setMySocket] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const [groupName, setGroupName] = useState("");
  const [groupMessage, setGroupMessage] = useState("");

  const socket = useMemo(() => io("http://localhost:8080"), []);

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("Socket At Client: ", socket.id);
      setMySocket(socket.id);
    });

    socket.on("event-a", (msg) => {
      console.log(msg);
    });

    socket.on("Recived Message", (chatMessage) => {
      setChat((prev) => [...prev, chatMessage]);
    });

    socket.on("groupMessage", function (data) {
      setChat((prev) => [...prev, data]);
      console.log('data' + data);
    });

    // return () => {
    //   socket.disconnect(); // Clean up socket connection when component unmounts
    // };
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   socket.emit("message", { room: [mySocket, room], message });
  //   setMessage("");
  // };

  const group = (event) => {
    event.preventDefault();
    socket.emit("createGroup", groupName, groupMessage);
  };

  return (
    <div className="chat-wrapper">
      <div>
        <h1>{mySocket}</h1>
        <ul>
          {chat.map((value, index) => (
            <li
              key={index}
              style={{ textAlign: room[0] === mySocket ? "right" : "left" }}
            >
              {value}
            </li>
          ))}
        </ul>
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
        <form onSubmit={group}>
          <input
            type="text"
            onChange={(e) => setGroupName(e.target.value)}
            value={groupName}
            name="groupName"
            placeholder="Enter Group Name"
          />
          <input
            type="text"
            onChange={(e) => setGroupMessage(e.target.value)}
            value={groupMessage}
            name="groupMessage"
            placeholder="Enter Group Massage"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
