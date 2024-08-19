import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        {product.name} - ${product.price}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </li>
    ))}
  </ul>
);

const Cart = ({ cart, removeItem, placeOrder }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeItem(item)}>Remove</button>
        </li>
      ))}
    </ul>
    <button onClick={placeOrder}>Place Order</button>
  </div>
);

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter(product => product.id !== item.id);
    setCart(updatedCart);
  };

  const placeOrder = () => {
    // Logic for placing the order (e.g., API request to the backend)
    console.log('Order placed:', cart);
    // Clear the cart after placing the order
    setCart([]);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeItem={removeItem} placeOrder={placeOrder} />
    </div>
  );
};

export default App;