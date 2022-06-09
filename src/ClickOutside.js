import { createRef, useEffect, useRef } from "react";

function ClickOutsideFn(fn) {
  const ref = createRef();
  const handleClick = e => {
    if(!ref.current.contains(e.target)){
      fn();
    }
  };
  useEffect(()=>{
    document.addEventListener('click', handleClick);
  }, []);
  return ref;
}

function ClickOutside() {
  const onClickOutside = () => {
    console.log('lalalala');
  };
  const ref = ClickOutsideFn(onClickOutside);
  console.log(ref);
  return (
    <div className="App">
      <div ref={ref}>
        <h1>Hello Doo</h1>
        <h2>This should be a popup</h2>
      </div>
      <input type='text'/>
    </div>
  );
}

export default ClickOutside;
