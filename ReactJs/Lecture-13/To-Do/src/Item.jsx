
import React from 'react';

const Item = ({ item, removeItem }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => removeItem(item)} className='bg-dark text-white px-3  rounded-pill my-2 mx-2 border-0' style={{fontSize: '1.3rem'}}>X</button>
    </div>
  );
};

export { Item as default };
