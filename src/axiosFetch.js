import { render } from "@testing-library/react";
import { Component, useEffect, useState } from "react";
import axios from 'axios';
function useInput () {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return {value, onChange};
}

function useFetch (url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const callUrl = async () => {
    try{
      const data = await axios.get(url);
      setPayload(data);
    } catch {
      setError('byebye');
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
   callUrl() 
  }, []);
  return {payload, loading, error} ;
}
const App = () => {
  const name = useInput('');
  const { payload, loading, error} = useFetch('https://aws/random.cat/meow')
  console.log(name);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder='Whats your name' />
      <br />
      {loading && <span>loading your cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} width="250" />}
    </div>
  );
}

export default App;
