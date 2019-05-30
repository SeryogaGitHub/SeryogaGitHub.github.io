import React from 'react';
import {NavLink} from 'react-router-dom';

const Message = (props) => {
  return (
    <div className={`item ${props.author ? 'left' : ''}`}>
      <div className="info">
        <div className="ava" style={{backgroundImage: `url(${props.ava})`}}/>
        <div className="name">{props.name}</div>
      </div>

      <div className="message">{props.message}</div>
    </div>
  );
};

export default Message;

