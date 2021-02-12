import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChatContext } from "../Firebase/ChatContext";
import { AuthContext } from "../Firebase/FireBaseAuth";
import firebase from "../Firebase/FirebaseConfig";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";

function ChatScreen() {
  const { messages, writeMessages } = useContext(ChatContext);
  const { user, isAuthenticated } = useContext(AuthContext);
  const [body, setBody] = useState("");

  const updateText = (event) => {
    const newText = event.target.value;
    setBody(newText);
  };

  const handelWriteMessages = () => {
    writeMessages(body);
  };

  return (
    <div>
      <div style={divStyle}>
        <Link
          to="/ExchangeRateList"
          className="badge badge-pill badge-warning"
          style={linkStyle}
        >
          Back
        </Link>
        <Link
          to="/"
          onClick={() => firebase.auth().signOut()}
          className="badge badge-pill badge-warning"
          style={linkStyle}
        >
          Logout
        </Link>
      </div>

      <InputGroup className="mb-3" style={contro1lStyle}>
        <Form.Control
          type="message"
          placeholder="Type your message"
          aria-describedby="basic-addon2"
          value={body}
          onChange={updateText}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handelWriteMessages}>
            Send
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {messages ? (
        messages.map((message, index) => {
          return (
            <div style={div1Style}>
              <Toast>
                <Toast.Header>
                  <strong className="mr-auto">{message.firstName}</strong>
                  <h6 style={h6Style}>{message.timestamp.toString()}</h6>
                </Toast.Header>
                <h2 style={h2Style}>{message.body}</h2>
              </Toast>
            </div>
          );
        })
      ) : (
        <h2>...Loading</h2>
      )}
    </div>
  );
}

const contro1lStyle = {
  width: "70%",
  marginBottom: "10%",
  border: "bold",
  marginRight: "20%",
  marginTop: "5%",
  marginLeft: "14%",
};

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const linkStyle = {
  
  marginBottom: "10%",
  marginTop: "10%",
  
};

const h2Style = {
  fontSize: 13,
};


const h6Style = {
  fontSize: 10,
};

const div1Style = {
  marginLeft:'15%',
  width: '60%',
  marginTop: '15%'
}
export default ChatScreen;
