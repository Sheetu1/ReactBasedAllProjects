import "./Components/Card.css"
import React, { useState } from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";
const App = () => {
 const [count,setcount] =  useState(0)
 const increaseHandler = () => {
  setcount(count+1);
 }
  return(
    <div className="main">
      {/* <Card>
        <h1>Hello</h1>
        <h2>Good morning</h2>
        <h3>How are you</h3>
      </Card>
      <Card children="Me bhi ek children hu">
      </Card> */}
      <Button Handler={increaseHandler} text="Increase" >
        <h1>{count}</h1>

      </Button>
    </div>
  )

}

export default App;