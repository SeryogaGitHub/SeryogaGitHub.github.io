import React from 'react';

const Friends = (props) => {
  const{ava, name} = props;
  return(
    <div className='friend'>
      <div className='ava' style={{backgroundImage: `url(${ava})`}}/>
      <div className="name">{name}</div>
    </div>
  );
}

export default Friends;
