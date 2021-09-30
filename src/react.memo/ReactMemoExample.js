import React from 'react';
import LargeChildComponent from "./LargeChildComponent";
import useForceReRender from "../helpers/useForceReRender";

const ReactMemoExample = () => {
  const forceReRender = useForceReRender()

  return (
    <>
      <h1>ReactMemoExample</h1>

      <LargeChildComponent/>

      <button className='btn' onClick={forceReRender}>Force re render</button>
    </>
  );
};

export default ReactMemoExample;