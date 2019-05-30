import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <li>
      <NavLink to={path} activeClassName='active-dialog'>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;

