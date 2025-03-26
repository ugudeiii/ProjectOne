import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import Main from "./Main";

function Menu() {
  const [filterName, setFilterName] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Main Products / Please Sign in first</h2>
      <div style={{ display: 'flex' }}> 
        <div style={{ flex: 0.6 }}>
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
        </div>
        <div style={{ flex: 3 }}> 
          <Main 
            filterName={filterName} 
            filterColor={filterColor} 
            minPrice={minPrice} 
            maxPrice={maxPrice} 
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
