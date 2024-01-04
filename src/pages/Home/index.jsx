import React from 'react'
import Login from './components/Login';
import Profile from './components/Profile';
import Auth from 'components/auth/Auth';

const Home = () => {
  return (
   <React.Fragment>
    <Login/>
    <Profile/>
   </React.Fragment>
  )
}

export default Home;