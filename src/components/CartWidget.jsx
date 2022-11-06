import React from "react";
import cartImg from "../assets/icons/cart-fill.svg"

const CartWidget = () => {
    return <div>
        <img src={cartImg} alt="carrito" />
        <p>4</p>
    </div>
}

export default CartWidget;