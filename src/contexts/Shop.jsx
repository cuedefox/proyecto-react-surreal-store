import React from "react";
import { useState } from "react";
const { createContext } = require("react");

export const Shop = createContext({});

const ShopProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const addProduct = (productAdd) => {
        setProducts([...products, productAdd]);
    }

    return <Shop.Provider value={{}}>
        {children}
    </Shop.Provider>
}

export default ShopProvider;