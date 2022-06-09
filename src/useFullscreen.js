import { useCallback, useEffect, useRef, useState } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  }
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkiRequestFullscreen) {
        element.current.webkiRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkiExitFullscreen) {
      document.webkiExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  
  return { element, triggerFull, exitFull };
}

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div ref={element}>
      <img
        src="https://i.ibb.co/R6RwNxx/grape.jpg"
        alt="grape"
        width='250' />
      <div>
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
    </div>
  );
}
export default App;