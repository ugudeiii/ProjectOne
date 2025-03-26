import React, { useState, useContext } from "react";
import { ProductListContext } from "../context/productListContext"; 
import "../createProduct.css"; 

const Create = () => {
  const { addProduct } = useContext(ProductListContext);
  
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    colors: [],
  });
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addColor = () => {
    if (color && !product.colors.includes(color)) {
      setProduct({ ...product, colors: [...product.colors, color] });
      setColor("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      alert("Please fill all fields!");
      return;
    }
    addProduct(product);
    alert("Product added successfully!");
    setProduct({ name: "", price: "", image: "", colors: [] });
  };

  return (
    <div className="create-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} required />

        <label>Colors:</label>
        <div className="color-input">
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>

        <div className="color-list">
          {product.colors.map((c, index) => (
            <span key={index} className="color-box" style={{ backgroundColor: c }}></span>
          ))}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Create;
