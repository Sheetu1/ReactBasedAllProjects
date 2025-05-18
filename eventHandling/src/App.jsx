
import React from "react";
const App = () => {
  const handleClick = () => {
    alert("I am clicked");
  }

  const handlemouseOver = () => {
    console.log("Yes i'm sheetal sharma..");
  }

  const changeHandler = (e) => {
    console.log("Me change ho rha hu");
    console.log(e.target.value);
  }
  return(
    <>
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
    <div>
      <h1 onMouseOver={handlemouseOver}>Hello sheetal sharma</h1>
    </div>
    <form>
      <input onChange={changeHandler} type="text" />
    </form>

    </>
  )
}
export default App;