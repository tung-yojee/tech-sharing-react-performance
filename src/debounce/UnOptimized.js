import React from 'react';

const UnOptimized = () => {

  const onChange = (value) => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json?key=${value}`).then(result => {
      console.log(result)
    })
  }

  return (
    <div className='box1'>
      <input onChange={e => onChange(e.target.value)}/>
    </div>
  );
};

export default UnOptimized;
