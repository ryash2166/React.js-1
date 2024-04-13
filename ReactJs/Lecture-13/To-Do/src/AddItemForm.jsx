import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };

  return (
    <div>
      <p style={{fontSize: '1.3rem' , fontWeight: '700'}}>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} placeholder='Enter text after click button'/>
        <button className='btn-sm bg-dark text-white mx-2 rounded-pill p-1 px-3 border-0'>Add Item</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };
