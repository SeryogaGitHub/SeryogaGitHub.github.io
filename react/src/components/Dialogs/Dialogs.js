import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const {dialogsData, messageData, textareaDefault} = props.dialogsPage;
  const {onChangeDialogTextarea, onAddPostDialog} = props;

  const dialogsEl = dialogsData.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>);
  const messagesEl = messageData.map((m,i) => <Message key={i} author={m.author} name={m.name} ava={m.ava} message={m.message}/>);

  let changeDialogTextarea = (e) => {
    let text = e.target.value;
    onChangeDialogTextarea(text)
  };
  let addPostDialog = () => {
    onAddPostDialog();
  };

  return (
    <div className='page-dialogs'>
      <h1>Повідомлення</h1>

      <div className="message-dialogs">
        <ul className='dialogs'>
          {dialogsEl}
        </ul>

        <div className="messages">
          {messagesEl}
        </div>

        <div className="dialogs-send-message">
          <textarea
            onChange={changeDialogTextarea}
            value={textareaDefault}
          />
          <button className="btn" onClick={addPostDialog}>Відправити повідомлення</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

