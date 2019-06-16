import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import './index.css';
import WebSocketInstance from './utils/websocket';

const App = () => {
  useEffect(() => {
    WebSocketInstance.connect();
  }, []);
  return <Chat />;
};

ReactDOM.render(<App />, document.getElementById('root'));
