import firebase from 'firebase/app'
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCr9kDRchMn5m2JprtTBSpGLeL7KIm0gUY",
  authDomain: "masada-f6f08.firebaseapp.com",
  projectId: "masada-f6f08",
  storageBucket: "masada-f6f08.appspot.com",
  messagingSenderId: "23360019233",
  appId: "1:23360019233:web:dbf1f402d43a768f913c60",
  measurementId: "G-JZMZFQ82WV"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };