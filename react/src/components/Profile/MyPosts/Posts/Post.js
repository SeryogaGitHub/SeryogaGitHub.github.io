import React from 'react';

const Post = (props) => {
  const{message, like, ava} = props;

  return (
    <div className='post-block'>
      <div className="logo" style={{backgroundImage: `url(${ava})`}}>&nbsp;</div>

      <div className="message">
        {message}
      </div>

      <div className={'like'}>
        Кількість Like: {like}
      </div>
    </div>
  )
};

export default Post;
