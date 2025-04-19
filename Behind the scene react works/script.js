 // const heading = React.createElement("h1",{},"Hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// parent inside child div than h1 tage inside this is h2 tag and h2 tag

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
     [ React.createElement("h1", {}, "This is Heading Tag"),React.createElement("h2",{},"This is ih2 tag")]
    )
  );
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log(parent);
  
  root.render(parent);


// 