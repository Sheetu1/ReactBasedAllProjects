
import React from "react";
const App = () => {
  const handleClick = () => {
    alert("I am clicked");
  }
  return(
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
export default App;