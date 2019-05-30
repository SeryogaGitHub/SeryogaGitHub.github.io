import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    dialogsPage: {
      textareaDefault: 'Текст повідомлення',
      noEditTextearea: 'Текст повідомлення',
      dialogsData: [
        {id: 1, name: 'Mia'},
        {id: 2, name: 'Beverly'},
        {id: 3, name: 'Marilyn'},
        {id: 4, name: 'Eva'},
      ],
      messageData: [
        {
          id: 1,
          name: 'Mia',
          ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
          message: 'Lorem ipsum dolor'
        },
        {
          id: 2,
          name: 'Me',
          author: true,
          ava: 'https://i.work.ua/sent_photo/f/8/7/f87e96e9b571602f6fa2181c95d79b00.jpg',
          message: 'Lorem ipsum dolor sit amet.'
        }
      ]
    },
    profilePage: {
      textareaDefault: 'Текст повідомлення',
      noEditTextearea: 'Текст повідомлення',
      friendsData: [
        {id: 1, ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg', name: 'Mia'},
        {
          id: 2,
          ava: 'https://nyppagesix.files.wordpress.com/2019/01/danielle-bergoli.jpg?quality=90&strip=all&w=618&h=410&crop=1',
          name: 'Beverly'
        },
        {
          id: 3,
          ava: 'https://www.abc.net.au/radionational/image/8398028-3x2-700x467.jpg',
          name: 'Rose'
        },
        {
          id: 4,
          ava: 'https://www.insideedition.com/sites/default/files/styles/931x523/public/images/2019-01/011819-mbginw-11280x720-.jpg?h=c673cd1c&itok=pcsqsVpJ',
          name: 'Marilyn'
        },
        {
          id: 5,
          ava: 'https://atgbcentral.com/data/out/28/4129804-cute-girl-images.jpg',
          name: 'Eva'
        },
      ],
      postData: [
        {
          id: 1,
          ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
          message: 'Повідомлення перше',
          like: '1'
        },
        {
          id: 2,
          ava: 'https://nyppagesix.files.wordpress.com/2019/01/danielle-bergoli.jpg?quality=90&strip=all&w=618&h=410&crop=1',
          message: 'Повідомлення друге',
          like: '4'
        },
        {
          id: 3,
          ava: 'https://atgbcentral.com/data/out/28/4129804-cute-girl-images.jpg',
          message: 'Повідомлення трейтє',
          like: '2'
        },
      ]
    },
    sideber: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('This state');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
