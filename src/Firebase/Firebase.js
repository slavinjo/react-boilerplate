import app from 'firebase/app';

const config = {
    apiKey: 'AIzaSyDVHJl5LsT_XVB6pTC8_zq3t1WHJcE9wiA',
    authDomain: 'react-shop-project.firebaseapp.com',
    databaseURL: 'https://react-shop-project.firebaseio.com',
    projectId: 'react-shop-project',
    storageBucket: 'react-shop-project.appspot.com',
    messagingSenderId: '164676623194',
  };


  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
  export default Firebase;