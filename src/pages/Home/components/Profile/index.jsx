import UserContext from 'contex/UseContextHook'
import React, { useContext } from 'react'

const Profile = () => {
    const {user}=useContext(UserContext)
 
  if (!user) return <h1>Please Login</h1>
  return <h2>Welcome {user.username}</h2>
 
  
}

export default Profile;