import React from "react";
import cart from "../assets/icons/cart-fill.svg";

const CartWidget = () => {
    return <div>
        <img src={cart} alt="carrito" />
        <p>4</p>
    </div>
}

export default CartWidget;