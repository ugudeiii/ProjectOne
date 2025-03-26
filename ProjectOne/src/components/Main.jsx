/*import React, { useContext, useEffect, useState } from "react";
import Product from './Product';
import { CartContext } from '../context/cart';

const Main = ({ filterName, filterColor, minPrice, maxPrice }) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3004/productget/products');
        const data = await response.json();
        console.log('Fetched products:', data); 
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    return (
      (!filterName || product.name.toLowerCase().includes(filterName.toLowerCase())) &&
      (!filterColor || product.colors.includes(filterColor)) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
    );
  });

  return (
    <div className="content">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            colors={product.colors}
            img={product.picture}
            addToCart={() => addToCart(product)} 
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Main; */

import React, { useContext } from "react";
import Product from './Product';
import { CartContext } from '../context/cart';

const Main = ({ filterName, filterColor, minPrice, maxPrice }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Product1',
      price: 19.99,
      colors: ['red', 'blue', 'green'],
      picture: 'https://i.pinimg.com/736x/60/08/87/6008870988021ffdb2df559ba6dceb38.jpg'
    }, 
    {
      id: 2,
      name:'Product2',
      price: 24.99,
      colors:['yellow', 'purple', 'white'],
      picture: 'https://i.pinimg.com/736x/4d/4d/25/4d4d25e93d8b7ca51d7335c39b5b6351.jpg'
    },
    {
      id: 3,
      name: 'Product3',
      price: 29.99,
      colors: ['black', 'pink', 'green'],
      picture: 'https://i.pinimg.com/736x/c2/d8/e4/c2d8e486f6fb595413772b2d35536225.jpg'
    },
    {
      id: 4,
      name: 'Product4',
      price: 15.99,
      colors: ['brown', 'gray', 'teal'],
      picture: 'https://i.pinimg.com/736x/05/df/ca/05dfcab081b4940792a80a7ee876c949.jpg'
    },
    {
      id: 5,
      name: 'Product5',
      price: 39.99,
      colors: ['cyan','magenta', 'lime', 'indigo'],
      picture: 'https://i.pinimg.com/736x/fe/5e/f5/fe5ef53f41430e44d8106e757defe6e9.jpg'
    },
    {
      id: 6,
      name: 'Product6',
      price: 49.99,
      colors: ['pink', 'violet', 'grey'],
      picture: 'https://i.pinimg.com/736x/20/3a/e1/203ae1359c83fac5e5388174856077fb.jpg'
    },
  ];

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterColor === "" || product.colors.includes(filterColor)) &&
      (minPrice === "" || product.price >= minPrice) &&
      (maxPrice === "" || product.price <= maxPrice)
    );
  });

  return (
    <div className="content">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          colors={product.colors}
          img={product.picture}
          addToCart={() => addToCart(product)} 
        />
      ))}
    </div>
  );
};

export default Main;
