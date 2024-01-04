import React, { useState } from 'react';
import './App.css';
import Home from 'pages/Home';
import {ContextProvider} from 'contex/ContextProvider';
import Dummy from 'pages/Dummy';
import About from 'pages/About/About';
import Auth from 'components/auth/Auth';
import Collections from 'components/collections/Collections';

function App() {
  const [user, setUser] = useState(null);
  return (
<React.Fragment>
<ContextProvider  value={{user,setUser}} >

  <Auth/>
  <Collections/>
  <Home/>
  <Dummy/>
  <About/>


</ContextProvider>
</React.Fragment>
  );
}

export default App;
