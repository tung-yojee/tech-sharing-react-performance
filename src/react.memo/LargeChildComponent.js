import React from 'react';

const LargeChildComponent = () => {
  return (
    <div className='box1'>
      LargeChildComponent
    </div>
  );
};

// export default LargeChildComponent;
export default React.memo(LargeChildComponent);
