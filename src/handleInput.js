import { render } from "@testing-library/react";
import { Component, useState } from "react";

function useInput () {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return {value, onChange};
}
const App = () => {
  const name = useInput('');
  console.log(name);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder='Whats your name' />
    </div>
  );
}

export default App;
