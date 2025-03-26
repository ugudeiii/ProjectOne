import React, { useState, useContext } from "react";
import { CartContext } from '../context/cart';
import ColorList from "./ColorList";
import Counter from "./Counter";

const Product = ({ id, name, price, colors, img, addToCart }) => {
  const { updateCartItem } = useContext(CartContext);
  const [count, setCount] = useState(1); 

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
      updateCartItem(id, count + 1); 
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      updateCartItem(id, count - 1); 
    }
  };

  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-image" />
      <div className="product-container">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>

      <div className="product-color">
        <ColorList colors={colors} />
      </div>

      <div className="counter-container">
        <Counter
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          minCount={1}
          maxCount={10}
        />
      </div>

      <button className="add-to-cart" onClick={() => addToCart({ id, name, price, img, count })}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;  
