import React from 'react';
import GlobalStyle from '../src/styles/global'
import Content from './components/content/Content/Content';
import Home from './components/home/Home';

function App() {
  return (
    <>
        <GlobalStyle/>
        <Home/>
        <Content/>
      
    </>
  );
}

export default App;
