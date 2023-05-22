import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import Header from './Components/Header/Header';
import Signin from './Components/Signin/Signin';
import Chat from './Components/Chat/Chat';
import './App.css';

// Initialize Firebase app
firebase.initializeApp({
  apiKey: "AIzaSyBTJ5xZVpVgwc1K42z-E84BChi0aqulIgE",
  authDomain: "chat-app-14815.firebaseapp.com",
  projectId: "chat-app-14815",
  storageBucket: "chat-app-14815.appspot.com",
  messagingSenderId: "258457000353",
  appId: "1:258457000353:web:a3d3b84ecb0f6d11e253e0",
  measurementId: "G-PKGZDYZ6SK"
})

const auth = firebase.auth();
function App() {
    const [user] = useAuthState(auth);
    console.log("hii", user);
    return (
      <div className='App'>
          <Header auth={auth} user={user} />
          {user ? <Chat user={user} /> : <Signin auth={auth} />}
      </div>
    );
}

export default App;
