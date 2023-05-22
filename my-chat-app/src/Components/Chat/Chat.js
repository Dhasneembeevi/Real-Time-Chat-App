import "./chat.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React, { useState, useRef } from 'react';
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

const Chat = ({ user }) => {
    const [message, setMessage] = useState("");
    const dummy = useRef()
    const firestore = firebase.firestore();

    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(100)
    const [messages] = useCollectionData(query, { idField: "id" })

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = user
        await messagesRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid, photoURL
        })
        setMessage("")
        dummy.current.scrollIntoView({ behaviour: "smooth" })
    }
    return (
        <div className="message">
            <div className="chat-window">
                {messages &&
                    messages.map((msg) =>
                        <Message key={msg.id} message={msg} user={user} />
                    )
                }
                <span ref={dummy}></span>
            </div>

            <div className="form-container">
                <form className="chat-area" onSubmit={(e) => sendMessage(e)}>
                    <div className="bottom">
                        <div className="text-input">
                            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here.." className="text-box"/>
                        </div>
                        <div className="send-btn">
                            <button style={{backgroundColor:"black"}} className="send">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPEs1T_vS_S1k6XrAzxXnLLWlWJMtFcp2C9VzZaIITOdnkA6m6EsuUqzZTphCAW1ZViM&usqp=CAU" alt="send-img" className="send-img"  />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chat
