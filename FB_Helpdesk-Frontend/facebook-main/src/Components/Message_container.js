import "../styles/Final.css";
import { utcDateToLocal } from "../utils/utils";
import { useState } from "react";

const messageStyle = {
  display: "flex",
  alignItems: "center",
  maxWidth: "100%",
  margin: "8px 0",
};

const textStyle = {
  fontSize: "1em",
  color: "#000000",
  position: "relative",
  margin: "0",
  marginBottom: "4px",
  textAlign: "left",
};

const timestampStyle = {
  fontSize: "0.65em",
  color: "#707070",
  textAlign: "right",
  margin: "0",
};

const imageStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "white",
  boxShadow: "0 0 4px 1px rgba(0,0,0,0.1)",
};

const contentWrapper = {
  minWidth: "20%",
  marginLeft: "8px",
  marginRight: "8px",
  borderRadius: "8px",
  background: "white",
  padding: "8px 16px",
  boxShadow: "0 0 4px 1px rgba(0,0,0,0.1)",
};

const MessageRecieve = ({ content, timestamp }) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <div style={{ ...messageStyle }}>
      <img src={imageUrl} alt="Profile" style={imageStyle} />

      <div style={contentWrapper}>
        <p style={textStyle}>{content}</p>
        <p className="timestamp" style={timestampStyle}>
          {timestamp}
        </p>
      </div>
    </div>
  );
};

const MessageSent = ({ content, timestamp }) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <div style={{ ...messageStyle, justifyContent: "flex-end" }}>
      <div style={contentWrapper}>
        <p style={{ ...textStyle, textAlign: "right" }}>{content}</p>
        <p style={timestampStyle}>{timestamp}</p>
      </div>

      <img src={imageUrl} alt="Profile" style={imageStyle} />
    </div>
  );
};

function MessageContainer(props) {
  const [msgContent, setMsgContent] = useState("");

  const onMsgContentChange = (e) => {
    setMsgContent(e.target.value);
  };

  const onMsgSendClick = () => {
    props.onMessageSend(msgContent);
    setMsgContent("");
  };

  return (
    <div className="column" id="column3">
      <div className="chat-header">
        <div className="details">
          <p style={{ fontWeight: "800", fontSize: "1.4em" }}>{props.name}</p>
        </div>
      </div>
      <div className="chat-container">
        {props.messages.map((val, ind) => {
          if (val.recieved) {
            return (
              <MessageRecieve
                key={val.messageId}
                content={val.content}
                timestamp={utcDateToLocal(val.time)}
              />
            );
          } else {
            return (
              <MessageSent
                key={val.messageId}
                content={val.content}
                timestamp={utcDateToLocal(val.time)}
              />
            );
          }
        })}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={msgContent}
          onChange={onMsgContentChange}
          placeholder="Type your message..."
        />
        <button onClick={onMsgSendClick}>Send</button>
      </div>
    </div>
  );
}

export default MessageContainer;
