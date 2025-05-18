

import React, { useState } from 'react'
import Login from './Components/Login';
import LogOut from './Components/LogOut';

const App = () => {
  const [isLogedIn, setLoggedIn] = useState(true);
  //conditional rendering using if else 
  //     if(isLogedIn){
  // return (
  //   <LogOut/>
  //       )
  //     }
  //     else{
  //       return(
  //         <Login/>
  //       )
  //     }

  // using ternery op
  return(
    <div>
  {isLogedIn ? <LogOut/> : <Login/> }

    </div>

  )
}

export default App;