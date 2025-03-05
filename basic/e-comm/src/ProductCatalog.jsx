import React from "react";
import { Link } from "react-router-dom";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Laptop", price: "10000" },
    { id: 2, name: "Smartphone", price: "5000" },
    { id: 3, name: "Headphones", price: "1000" },
  ];
  return (
    <div className="product-container">
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
      <Link to="/">Logout</Link>
    </div>
  );
};

export default ProductCatalog;
