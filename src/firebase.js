import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCg43FF-HuFYtWmi9xSnt22hZLOzAoCjds',
  authDomain: 'todoist-clone-f2ed7.firebaseapp.com',
  databaseURL: 'https://todoist-clone-f2ed7.firebaseio.com',
  projectId: 'todoist-clone-f2ed7',
  storageBucket: 'todoist-clone-f2ed7.appspot.com',
  messagingSenderId: '764931059703',
  appId: '1:764931059703:web:7d3e38f8b3d0439d2f08f2',
});

export { firebaseConfig as firebase };
