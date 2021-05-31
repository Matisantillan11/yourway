import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/app';
import config from './firebase/configuration.js';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
firebase.initializeApp(config);

//styles
import './index.scss';
ReactDOM.render(<App />, document.getElementById('root'));
