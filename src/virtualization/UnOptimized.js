import React, {useMemo} from 'react';

const UnOptimized = () => {
  const items = useMemo(() => {
    return [...Array(50000).keys()]
  }, [])

  return (
    <div className='box2'>
      {
        items.map((item, index) => <p>Item {index}</p>)
      }
    </div>
  );
};

export default UnOptimized;
