const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {
      id:1,
      followed: true,
      ava: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Girl_in_blue_kimono.jpg',
      fullName: "Mia",
      status: "Good girl",
      location: {city: 'Tokyo', country: 'Japan'}
    },
    {
      id:1,
      followed: false,
      ava: 'https://www.insideedition.com/sites/default/files/styles/931x523/public/images/2019-01/011819-mbginw-11280x720-.jpg?h=c673cd1c&itok=pcsqsVpJ',
      fullName: "Marilyn",
      status: "Nice girl",
      location: {city: 'California', country: 'USA'}
    },
    {
      id:1,
      followed: false,
      ava: 'https://atgbcentral.com/data/out/28/4129804-cute-girl-images.jpg',
      fullName: "Eva",
      status: "One girl",
      location: {city: 'Berlin', country: 'Germany'}
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return{
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId){
            return {...u, followed: true}
          }
          return u;
        })
      };
    case UNFOLLOW:
      return{
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        })
      };
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;
