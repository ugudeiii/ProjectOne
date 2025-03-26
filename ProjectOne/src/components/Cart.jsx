import React, { useContext } from "react";
import { CartContext } from '../context/cart';
import '../Cart.css';
import Counter from './Counter'; 
import ColorList from "./ColorList";

const Cart = () => {
  const { cartItems, clearCart, getCartTotal, updateCartItem, removeFromCart } = useContext(CartContext);

  const handleIncrease = (item) => {
    updateCartItem(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCartItem(item.id, item.quantity - 1);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.picture} alt={item.name} className="product-image" />
              <div className="product-details">
                <div>
                  <div className="product-name">{item.name}</div>
                </div>

                <ColorList colors={item.colors} />

                <Counter
                  count={item.quantity}
                  stock={item.stock}
                  onIncrease={() => handleIncrease(item)}
                  onDecrease={() => handleDecrease(item)}
                />
              </div>
              <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <div className="total-payment-container">
        <div className="cart-total">
          <strong>Total:</strong> ${getCartTotal().toFixed(2)}
        </div>
        <button className="payment-button" onClick={clearCart}>Payment</button>
      </div>
    </div>
  );
};

export default Cart; 
