import ReactDOM from 'react-dom';
import App from './App.jsx';
import MyApp from './myApp.jsx';
import React, { Component } from 'react';

const SHOW_SOLUTION_ORIGINAL = false;

if (SHOW_SOLUTION_ORIGINAL) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  ReactDOM.render(<MyApp />, document.getElementById('root'));
}
