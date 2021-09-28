import React, {useMemo,} from 'react';
import useForceReRender from "../helpers/useForceReRender";

const UnOptimizedExpensiveCalculation = () => {
  const forceReRender = useForceReRender()

  const arr = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 1000_000; ++i) {
      arr.push(i);
    }

    return arr;
  }, [])

  return (
    <div>
      <h1>UseMemoExpensiveCalculation</h1>
      <h3>Generate array {arr.length} element</h3>

      <button onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default UnOptimizedExpensiveCalculation;