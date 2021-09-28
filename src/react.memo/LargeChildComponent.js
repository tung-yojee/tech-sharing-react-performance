import React from 'react';

const LargeChildComponent = () => {
  return (
    <div className='box1'>
      LargeChildComponent
      <button className='btn'>Click me</button>
    </div>
  );
};

export default LargeChildComponent;
// export default React.memo(LargeChildComponent);
