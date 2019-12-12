import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Login from './pages/Login';
import PostForm from './pages/Post';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Header from './components/Header';

const firebaseConfig = {
  apiKey: "AIzaSyB7Z5__AkZwZ9k653qFKTuwaifnLbXaHCI",
  authDomain: "social-emoji.firebaseapp.com",
  databaseURL: "https://social-emoji.firebaseio.com",
  projectId: "social-emoji",
  storageBucket: "social-emoji.appspot.com",
  messagingSenderId: "358648193638",
  appId: "1:358648193638:web:ca52ef8be86917ea6283a7"
};


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    //initialize firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error){
        console.log('error', error);
      });
  }, [firebaseConfig])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        setLoggedIn(true);
        setUser(user);
      } else {
        //no user is signed in
        setLoggedIn(false);
        setUser({});
      }
    });
  }, [])

  function signupFunction(e){
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error){
        console.log('error', error.message);
      })
  }

  function loginFunction(e){
    e.preventDefault();

    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error){
        console.log('error', error);
      })

  }

  function logoutFunction(){
    firebase.auth().signOut().then(function(){
      //sign out successful
      setLoggedIn(false);
    }).catch(function(error){
      console.log('error', error);
    })
  }


  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>
        <Route exact path='/profile'>
          <UserProfile user={user}/>
        </Route>
        <Route exact path='/'>
          { loggedIn ? <Home/>: <Redirect to="/login" />}
        </Route>
        <Route exact path='/login'>
          { loggedIn ? <Redirect to="/" />: <Login loginFunction={loginFunction}/>}
        </Route>
        <Route exact path='/post'>
          { loggedIn ? <PostForm/>: <Login loginFunction={loginFunction}/>}
        </Route>
        <Route exact path='/sign-up'>
          { loggedIn ? <Redirect to="/" />: <Signup signupFunction={signupFunction}/>}
        </Route>
      </Router>
    </div>
  );
}

export default App;
