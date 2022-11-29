import { React, useContext } from "react";
import { Shop } from "../contexts/Shop";
import cartImg from "../assets/icons/cart-fill.svg";

const CartWidget = () => {
    const {totalItemsCart} = useContext(Shop);
    
    return <div>
        <img src={cartImg} alt="carrito" />
        <span>{totalItemsCart() === 0 ? '0' : totalItemsCart() > 9 ? '+9' : `${totalItemsCart()}`}</span>
    </div>
}

export default CartWidget;