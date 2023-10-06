import React from 'react';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
