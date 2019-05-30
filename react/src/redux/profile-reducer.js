const ON_CHANGE_TEXTAREA = 'ON-CHANGE-TEXTAREA';
const ADD_POST = 'ADD-POST';

let initialState = {
  textareaDefault: 'Текст повідомлення',
  noEditTextearea: 'Текст повідомлення',
  postData: [
    {
      id: 1,
      ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
      message: 'Повідомлення перше',
      like: '1'
    }
  ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.textareaDefault,
        like: 1,
        ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
        name: 'Mia'
      };

      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.textareaDefault = state.noEditTextearea;
      return stateCopy;
    }
    case ON_CHANGE_TEXTAREA: {
      let stateCopy = {...state};
      stateCopy.textareaDefault = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostAction = () => ({ type: ADD_POST });
export const onChangeTextareaAction = (text) => ({ type: ON_CHANGE_TEXTAREA, text: text });

export default profileReducer;
