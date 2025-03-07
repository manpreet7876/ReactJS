import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: "10000", image: "/assets/laptop.png" },
    { id: 2, name: "Smartphone", price: "5000", image: "/assets/phone.png" },
    { id: 3, name: "Headphones", price: "1000", image: "/assets/headphones.jpg" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-container">
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <strong>{product.name}</strong> - ₹{product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link>
      <br />
      <Link to="/">Logout</Link>
    </div>
  );
};

export default ProductCatalog;
