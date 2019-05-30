import React from 'react';
import {addPostDialogsAction, changeTextareaDialogAction} from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onChangeDialogTextarea: (text) => {
      dispatch(changeTextareaDialogAction(text));
    },
    onAddPostDialog: () => {
      dispatch(addPostDialogsAction());
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

