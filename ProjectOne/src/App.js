/*import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate, Navigate } from 'react-router-dom';

const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Sorry, the page you're looking for does not exist.</p>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet /> 
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Stats({ user }) {

  if(!user) {
    return (
      <Navigate to="/login" replace/>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Stats View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    if(creds.username === 'admin' && creds.password === '123') {
      onLogin && onLogin({username: creds.username});
      navigate('/stats');
    }
  }
  return (
    <div style={{ padding: 10 }}>
      <br/>
      <span>Username:</span><br/>
      <input
        type="text"
        onChange={(e) => setCreds({...creds, username: e.target.value})}/><br/>
      <span>Password:</span><br/>
      <input
        type="password"
        onChange={(e) => setCreds({...creds, password: e.target.value})}/><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function AppLayout() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
          Posts
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
          <span> | </span>
          { user && <Link to="/stats" style={{ padding: 5 }}>
          Stats
          </Link> }
          { !user && <Link to="/login" style={{ padding: 5 }}>
          Login
          </Link> }
          { user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>
          Logout
          </span> }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={setUser}/>} />
        <Route path="/stats" element={<Stats user={user}/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
        <AppLayout/>
    </Router>
  );
}

export default App;
*/


/*
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './product.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import BuyNow from './components/BuyNow';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

function Menu() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Our Main Products </h2>
      <Main />
    </div>
  );
}

function Menu3() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Travis Scott</h2>
      <Main2 />
    </div>
  );
}

function Menu2() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Metro Boomin</h2>
      <Main3 />
    </div>
  );
}

function AppLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate('/');
  }

  return (
    <>
      <Header user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Menu2" element={<Menu2 />} />
        <Route path="/Menu3" element={<Menu3 />} />
        <Route path="/BuyNow" element={<BuyNow onLogin={setUser} />} />
        <Route path="/Home" element={<Home user={user} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App; */


/*
//lab4 Add to car 

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from './context/cart'; 
import './App.css';
import './product.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import NoMatch from './components/NoMatch';
import Cart from './components/Cart';

function Menu() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Our Main Products </h2>
      <Main />
    </div>
  );
}

function Menu3() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Travis Scott</h2>
      <Main2 />
    </div>
  );
}

function Menu2() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Metro Boomin</h2>
      <Main3 />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      <Router>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/Menu2" element={<Menu2 />} />
          <Route path="/Menu3" element={<Menu3 />} />
          <Route path="/Cart" element={<Cart showModal={true} toggle={() => {}} />} /> 
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App; */

/*
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart";
import { ProductListProvider } from "./context/productListContext"; 
import "./App.css";
import "./product.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import NoMatch from "./components/NoMatch";
import Cart from "./components/Cart";
import Filter from "./components/Filter";

function Menu() {
  const [filterName, setFilterName] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Main Products</h2>
      <Filter 
        filterName={filterName} 
        setFilterName={setFilterName} 
        filterColor={filterColor} 
        setFilterColor={setFilterColor} 
        minPrice={minPrice} 
        setMinPrice={setMinPrice} 
        maxPrice={maxPrice} 
        setMaxPrice={setMaxPrice} 
      />
      <Main filterName={filterName} filterColor={filterColor} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}

function Menu2() {
  const [filterName, setFilterName] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Travis Scott</h2>
      <Filter 
        filterName={filterName} 
        setFilterName={setFilterName} 
        filterColor={filterColor} 
        setFilterColor={setFilterColor} 
        minPrice={minPrice} 
        setMinPrice={setMinPrice} 
        maxPrice={maxPrice} 
        setMaxPrice={setMaxPrice} 
      />
      <Main2 filterName={filterName} filterColor={filterColor} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}

function Menu3() {
  const [filterName, setFilterName] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Related to Metro Boomin</h2>
      <Filter 
        filterName={filterName} 
        setFilterName={setFilterName} 
        filterColor={filterColor} 
        setFilterColor={setFilterColor} 
        minPrice={minPrice} 
        setMinPrice={setMinPrice} 
        maxPrice={maxPrice} 
        setMaxPrice={setMaxPrice} 
      />
      <Main3 filterName={filterName} filterColor={filterColor} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      <ProductListProvider>
        <Router>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Menu2" element={<Menu2 />} />
            <Route path="/Menu3" element={<Menu3 />} />
            <Route path="/Cart" element={<Cart showModal={true} toggle={() => {}} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </Router>
      </ProductListProvider>
    </CartProvider>
  );
}

export default App; */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cart";
import { ProductListProvider } from "./context/productListContext"; 
import "./App.css";
import "./product.css";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home2 from "./components/Home2";
import About from "./components/About";
import Main from "./components/Main";
import NoMatch from "./components/NoMatch";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Create from "./components/Create"; 

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  function handleLogout() {
    setUser(null);
  }



  return (
    <CartProvider>
      <ProductListProvider>
        <Router>
          <Header user={user} logOut={handleLogout} />
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            <Route path="/Cart" element={user ? <Cart /> : <Navigate to="/Login" />} />
            <Route path="/Create" element={user && user.isAdmin ? <Create /> : <Navigate to="/Login" />} />
            <Route path="/Profile" element={<Profile user={user} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </Router>
      </ProductListProvider>
    </CartProvider>
  );
}

export default App;
