import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './pages/Home';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <HomePage />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

