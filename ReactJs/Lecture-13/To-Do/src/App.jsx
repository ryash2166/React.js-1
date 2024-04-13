
import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <AddItemForm addItem={addItem} />
      <header className="App-header my-3" style={{fontSize: '1.3rem'}}>
        <p style={{fontWeight:'700'}}> To Do items </p>
        <ItemList items={items} removeItem={removeItem} style={{fontWeight: '300'}}/>
        
      </header>
    </div>
  );
}

export default App;
