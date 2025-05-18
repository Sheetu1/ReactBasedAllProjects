
import React from "react";
const App = () => {
  const handleClick = () => {
    alert("I am clicked");
  }
  const handlemouseOver = () => {
    console.log("Yes i'm sheetal sharma..");
  }
  return(
    <>
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
    <div>
      <h1 onMouseOver={handlemouseOver}>Hello sheetal sharma</h1>
    </div>

    </>
  )
}
export default App;