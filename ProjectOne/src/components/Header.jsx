/*import { Link } from 'react-router-dom';

function Header({ user, logOut }) {
  return (
    <header>
      <nav>
        <h3>Try our album posters</h3>
        <Link to="/" >Menu 1</Link>
        <Link to="/Menu2" >Menu 2</Link>
        <Link to="/Menu3" >Menu 3</Link>
        <span> | </span>
        {user ? (
          <>
            <Link to="/Home" >Home</Link>
            <span onClick={logOut} style={{ padding: 5, cursor: 'pointer', color: 'white' }}>Logout</span>
          </>
        ) : (
          <Link to="/Cart" >Buy Now</Link>
        )}
      </nav>
    </header>
  );
} */

  
  import { Link } from 'react-router-dom';

  function Header({ user, logOut }) {
    return (
      <header>
        <nav>
          <h3>Try our album posters</h3>
          <Link to="/" >Home</Link>
          <Link to="/About" >About Us</Link>
          <Link to="/Menu" >Product List </Link>
          <span> | </span>
          {user ? (
            <>
              <Link to="/Create" >Create</Link>
              <Link to="/Cart" >Buy Now</Link>
              <span onClick={logOut} style={{ padding: 3, cursor: 'pointer', color: 'white' }}>Logout</span>
            </>
          ) : (
            <Link to="/Login" >Login</Link>
          )}
        </nav>
      </header>
    );
  }
  
  export default Header;
  
/*
import { useContext } from 'react';
import { CartContext } from '../context/cart';

const Header = () => {
  const { cartItems } = useContext(CartContext); 
  return (
    <header>
      <h3>My Shop</h3>
      <button>
        Cart ({cartItems.length}) 
      </button>
    </header>
  );
};

export default Header; */
