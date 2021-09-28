import React, {useCallback} from 'react';
import debounce from 'lodash.debounce';

const Optimized = () => {
  const onChange = useCallback((value) => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json?key=${value}`).then(result => {
      console.log(result)
    })
  }, [])

  const debouncedOnChange = debounce(onChange, 300);

  return (
    <div className='box1'>
      <input onChange={e => debouncedOnChange(e.target.value)}/>
    </div>
  );
};

export default Optimized;
