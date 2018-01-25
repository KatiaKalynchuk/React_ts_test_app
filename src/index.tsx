import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { configureStore } from './store';
import { App } from './containers/App';
//import * as firebase from 'firebase';
//import { firebaseApp } from './firebase';

const store = configureStore();
store.subscribe(() => {

  console.log(store.getState())
});

import { configureFakeBackend } from './helpers/fake_backend.js';
configureFakeBackend();

// const config = {
//   apiKey: "AIzaSyCu6gUeHi2J87Nw1WN11tdC8RgstUdpY3E",
//   authDomain: "myproject-608bf.firebaseapp.com",
//   databaseURL: "https://myproject-608bf.firebaseio.com",
//   projectId: "myproject-608bf",
//   storageBucket: "",
//   messagingSenderId: "446738810764"
//  };
//
// firebase.initializeApp(config);

// firebaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('user was sign in', user)
//   } else {
//     console.log('user has signet out')
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
