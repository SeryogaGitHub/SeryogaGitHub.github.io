import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Main/Main';
import AsideContainer from './components/Aside/AsideContainer';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='grid'>
      <Header/>
      <AsideContainer/>
      <div className='main-content'>
        <Route exact path='/' component={Content}/>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/users' render={() => <UserContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/setting' component={Setting}/>
      </div>
    </div>
  );
};

export default App;

