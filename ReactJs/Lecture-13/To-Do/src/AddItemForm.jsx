import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item ? item : 'empty');
    setItem('');
  };

  return (
    <div>
      <p style={{fontSize: '1.3rem' , fontWeight: '700'}}>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} className='rounded-pill border-1 px-3 py-2' placeholder='Enter text after click button'/>
        <button className='btn-sm bg-dark text-white mx-2 rounded-pill py-2 px- border-0 px-3'>Add Item</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };
