import React from 'react';

const LargeChildComponent = ({items}) => {
  return (
    <div className='box1'>
      LargeChildComponent
      <br/>
      {items.join(', ')}
    </div>
  );
};

export default React.memo(LargeChildComponent);
