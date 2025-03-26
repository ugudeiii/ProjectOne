import React from "react";

const Filter = ({
    filterName, setFilterName, filterColor, setFilterColor, minPrice, setMinPrice, maxPrice, setMaxPrice
}) => {
    return (
        <div className="filter-container">
            <h1>Filter</h1>
            <input 
        type="text" 
        value={filterName} 
        onChange={(e) => setFilterName(e.target.value)} 
        />
        <select onChange={(e) => setFilterColor(e.target.value)} value={filterColor}>
        <option value=""></option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
        <option value="brown">Brown</option>
        <option value="gray">Gray</option>
        <option value="teal">Teal</option>
        <option value="cyan">Cyan</option>
        <option value="magenta">Magenta</option>
        <option value="lime">Lime</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
        </select>

        <div className="price-filter">
        <input 
            type="number" 
            placeholder="Min " 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)} 
        />
            <input 
            type="number" 
            placeholder="Max " 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
        />
        </div>
        </div>
    );
};

export default Filter;
