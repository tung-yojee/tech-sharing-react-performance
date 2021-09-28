import React, {useMemo} from 'react';
import useForceReRender from "../helpers/useForceReRender";
import LargeChildComponent from "./LargeChildComponent";

const UnOptimizedProp = () => {
  const forceReRender = useForceReRender()

  const items = useMemo(() => [1, 2, 3, 4, 5], [])

  return (
    <div>
      <h1>UnOptimizedProp</h1>

      <LargeChildComponent items={items}/>

      <button className='btn' onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default UnOptimizedProp;