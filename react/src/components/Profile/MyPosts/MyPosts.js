import React from 'react';
import Post from "./Posts/Post";

const MyPosts = (props) => {
  const {onPostClick, onChangeTextareaChange, postData, textareaDefault} = props;
  const postEl = postData.map((p, i) => <Post key={i} message={p.message} like={p.like} ava={p.ava}/>);

  let newPostEl = React.createRef();

  let addPostClick = () => {
    onPostClick();
  };

  let changeTextareaChange = () => {
    let text = newPostEl.current.value;
    onChangeTextareaChange(text);
  };

  return (
    <div className='posts-block'>
      <header>
        <h2>Мої повідомлення</h2>
        <textarea onChange={changeTextareaChange}
                  ref={newPostEl}
                  placeholder="Текст повідомлення"
                  value={textareaDefault}
        />
        <button onClick={addPostClick}>Створити повідомлення</button>
      </header>

      {postEl}
    </div>
  )
};

export default MyPosts;
