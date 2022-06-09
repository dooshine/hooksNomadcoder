import { useEffect, useRef, useState } from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if(typeof onConfirm !== 'function') {
    return;
  }
  if(typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () =>{
    if(window.confirm(message)){
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
}
function App() {
  const deleteWorld = () => console.log('Delete the world...')
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>
        Delete the world
        </button>
    </div>
  );
}

export default App;