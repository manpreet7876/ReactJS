import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: "10000", image: "/assets/laptop.png" },
  ]);

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : null}
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-image" />
            <div className="cart-info">
              <strong>{product.name}</strong> - ₹{product.price}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && <Link to="/payment">Proceed to Payment</Link>}
      <br />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default CartPage;
