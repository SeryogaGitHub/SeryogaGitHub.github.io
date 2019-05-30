let initialState = {
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
};

const asideReducer = (state = initialState, action) => {
  return state;
};

export default asideReducer;
