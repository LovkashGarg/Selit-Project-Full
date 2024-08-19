import React, { useState } from 'react';

const DynamicList = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  const addItem = () => {
    // Using the spread operator to create a new array with the existing items and the new item
    setItems([...items, `Item ${items.length + 1}`]);
  };

  // Function to remove an item from the list based on its index
  const removeItem = (index) => {
    // Using filter to create a new array without the item at the specified index
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {/* Mapping over the items array to render each item */}
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* Button to remove the item when clicked */}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
