import React from 'react';
import {connect} from 'react-redux';
import Aside from './Aside';

let mapStateToProps = (state) => {
  return{
    friendsData: state.aside.friendsData
  }
};

const AsideContainer = connect(mapStateToProps)(Aside);

export default AsideContainer;

