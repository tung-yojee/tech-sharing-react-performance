import React, {useMemo} from 'react';
import {Virtuoso} from 'react-virtuoso'

const Optimized = () => {
  const items = useMemo(() => {
    return [...Array(50000).keys()]
  }, [])

  return (
    <Virtuoso
      className='box2'
      style={{height: '500px'}}
      totalCount={items.length}
      itemContent={index => <p>Item {index}</p>}
    />
  );
};

export default Optimized;
