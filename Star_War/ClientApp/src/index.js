import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css";
// import "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
// import './Assets/js/jquery.min.js'
// import './Assets/js/bootstrap.min.js'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
