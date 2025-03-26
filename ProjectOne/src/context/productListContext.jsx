import React, { createContext, useState, useEffect } from "react";

export const ProductListContext = createContext();

export const ProductListProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [filterName, setFilterName] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                const updatedData = data.map((item) => ({
                    ...item,
                    color: ["Red", "Blue", "Green", "Black", "White"][Math.floor(Math.random() * 5)]
                }));
                setProductList(updatedData);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <ProductListContext.Provider
            value={{
                productList,
                filterName,
                setFilterName,
                filterColor,
                setFilterColor,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
            }}
        >
            {children}
        </ProductListContext.Provider>
    );
};
