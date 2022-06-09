import { useEffect } from "react";

const useHover = onHover => {
    const element = useRef();
    useEffect(()=>{
    if(typeof onHover !== 'function'){
        return ;
    }
    if(element.current) {
        element.current.addEventListener('mouseenter', onHover);
    }
    return () =>{
        if(element.current){
            element.current.removeEventListener('mouseenter', onHover);
        }
    };
    },[])
    return typeof onHover === 'function' ? element : undefined;
}

function App() {
    return (
      <div>
        <h1>
          Hello
        </h1>
      </div>
    );
  }
  
  export default useHover;