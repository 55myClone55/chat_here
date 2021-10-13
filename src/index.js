import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  firebase from 'firebase';
//import { initializeApp } from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp( {
  apiKey: "AIzaSyCrpd_mheDlUQmpQz0rEJ9CdaupM0IJEBM",
  authDomain: "chat-react-this.firebaseapp.com",
  projectId: "chat-react-this",
  storageBucket: "chat-react-this.appspot.com",
  messagingSenderId: "460315519374",
  appId: "1:460315519374:web:11eec703c207ac407d1cdf",
  measurementId: "G-LMXX36PRVD"
}
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
<App />
  </Context.Provider>,
    document.getElementById('root')
);

