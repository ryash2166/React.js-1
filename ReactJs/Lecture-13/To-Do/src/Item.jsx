
import React from 'react';

const Item = ({ item, removeItem }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => removeItem(item)} className='bg-dark text-white px-2  rounded-pill my-2 mx-2 border-0' style={{fontSize: '1rem'}}>X</button>
    </div>
  );
};

export { Item as default };
