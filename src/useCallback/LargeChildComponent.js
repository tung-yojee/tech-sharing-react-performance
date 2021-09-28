import React from 'react';

const LargeChildComponent = ({onClick}) => {
  return (
    <div className='box1'>
      LargeChildComponent

      <button className='btn' onClick={onClick}>Click me</button>
    </div>
  );
};

export default React.memo(LargeChildComponent);
