import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {

};
const UserContainer = connect(mapStateToProps)(Users);

export default UserContainer;
