import React from 'react';
import {Router} from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <Router>
       
    </Router>
  );
}

export default connect(state => ({
  loading: state.App.loading
}))(App);
