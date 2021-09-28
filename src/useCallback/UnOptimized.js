import React from 'react';
import useForceReRender from "../helpers/useForceReRender";
import LargeChildComponent from "./LargeChildComponent";

const UnOptimized = () => {
  const forceReRender = useForceReRender()

  return (
    <div>
      <h1>UseCallbackExample</h1>
      <LargeChildComponent onClick={() => alert("hello!")}/>

      <button className='btn' onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default UnOptimized;
