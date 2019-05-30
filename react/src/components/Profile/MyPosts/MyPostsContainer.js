import React from 'react';
import {addPostAction, onChangeTextareaAction} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    textareaDefault: state.profilePage.textareaDefault
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
    onPostClick: () => {
      dispatch(addPostAction());
    },
    onChangeTextareaChange: (text) => {
      dispatch(onChangeTextareaAction(text));
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
