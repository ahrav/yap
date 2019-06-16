import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../routes';
import SidePanel from './SidePanel';
import Profile from './Profile';
import { authCheckState } from '../store/actions/auth';
import '../index.css';

const App = ({ authCheckState }) => {
  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return (
    <Router>
      <div id='frame'>
        <SidePanel />
        <div className='content'>
          <Profile />
          <BaseRouter />
        </div>
      </div>
    </Router>
  );
};

export default connect(
  null,
  { authCheckState }
)(App);
