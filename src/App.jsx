
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';

const App = () => {
  return (
    <div>
  <Header>
  </Header>
  <Outlet></Outlet>
  {/* <Footer></Footer> */}
    </div>
  );
};

export default App;