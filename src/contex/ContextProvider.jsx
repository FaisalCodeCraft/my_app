import UserContext from "contex/UseContextHook";
import React, { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <React.Fragment>
      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>
    </React.Fragment>
  );
};
// export const ContextProvider = UserContext.Provider

export default ContextProvider;
