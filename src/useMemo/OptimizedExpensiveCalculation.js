import React, {useMemo,} from 'react';
import useForceReRender from "../helpers/useForceReRender";

const UnOptimizedExpensiveCalculation = () => {
  const forceReRender = useForceReRender()

  const arr = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 10_000_000; ++i) {
      if (i % 2 === 0) arr.push(i);
    }

    return arr;
  }, [])

  return (
    <div>
      <h1>UnOptimizedExpensiveCalculation</h1>
      <h3>Have {arr.length} even element</h3>

      <button onClick={forceReRender}>Force re render</button>
    </div>
  );
};

export default UnOptimizedExpensiveCalculation;