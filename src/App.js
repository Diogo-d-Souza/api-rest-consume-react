import React from 'react';

import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
