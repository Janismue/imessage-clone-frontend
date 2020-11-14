import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

import "./Imessage.css";

function IMessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default IMessage;
