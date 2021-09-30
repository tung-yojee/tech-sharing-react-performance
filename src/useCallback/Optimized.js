import React, {useCallback} from 'react';
import useForceReRender from "../helpers/useForceReRender";
import LargeChildComponent from "./LargeChildComponent";

const Optimized = () => {
  const forceReRender = useForceReRender()

  const onClick = useCallback(() => {
    alert("hello!")
  }, [])

  return (
    <div>
      <h1>UseCallbackExample</h1>
      <LargeChildComponent onClick={onClick}/>

      <button className='btn' onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default Optimized;