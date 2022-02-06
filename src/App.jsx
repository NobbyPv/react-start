import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={contentStyle}>hello</h1>
      <p>how are you?</p>
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
