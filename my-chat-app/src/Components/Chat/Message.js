import React from 'react'
import "./chat.css"

const Message = ({ message, user }) => {
  const { text, uid, photoURL,createdAt } = message
  const messageClass = uid === user.uid ? "sender" : "receiver"

  // Convert createdAt timestamp to a Date object
  const timestamp = createdAt && createdAt.toDate ? createdAt.toDate() : null;

  // Format the timestamp using toLocaleString()

  const timeString = timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`display-message ${messageClass}`}>
        <img src={photoURL} alt='user' className='chat-img' />
        <p className='textmsg'> {text}
        <br/>
        <span style={{marginBottom:"2px"}}>{timeString}</span>
        </p>
        
    </div>
  )
}

export default Message
