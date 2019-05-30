import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from '../Friends/Friends';

const Aside = (props) => {
  const {friendsData} = props;
  const friends = friendsData.map((f,i) => <Friends key={i} name={f.name} ava={f.ava}/>);

  return (
    <aside className='aside'>
      <nav className={'main-nav'}>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active-link'>Головна</NavLink>
          </li>
          <li>
            <NavLink to='/profile' activeClassName='active-link'>Профіль</NavLink>
          </li>
          <li>
            <NavLink to='/users' activeClassName='active-link'>Підписники</NavLink>
          </li>
          <li>
            <NavLink to='/dialogs' activeClassName='active-link'>Повідомлення</NavLink>
          </li>
          <li>
            <NavLink to='/setting' activeClassName='active-link'>Налаштування</NavLink>
          </li>
        </ul>
      </nav>

      <h2>Друзі</h2>
      <div className="friends-section">
        {friends}
      </div>
    </aside>
  )
};

export default Aside;
