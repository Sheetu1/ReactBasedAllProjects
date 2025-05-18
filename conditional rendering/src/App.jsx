

import React, { useState } from 'react'
import Login from './Components/Login';
import LogOut from './Components/LogOut';

const App = () => {
  const [isLogedIn, setLoggedIn] = useState(true);
      if(isLogedIn){
  return (
    <LogOut/>
        )
      }
      else{
        return(
          <Login/>
        )
      }
}

export default App;