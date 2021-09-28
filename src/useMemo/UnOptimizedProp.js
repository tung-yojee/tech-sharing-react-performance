import React from 'react';
import LargeChildComponent from "./LargeChildComponent";
import useForceReRender from "../helpers/useForceReRender";

const UnOptimizedProp = () => {
  const forceReRender = useForceReRender()

  return (
    <div>
      <h1>UnOptimizedProp</h1>

      <LargeChildComponent items={[1, 2, 3, 4, 5]}/>

      <button className='btn' onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default UnOptimizedProp;