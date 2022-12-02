import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../contexts/Shop";
import CartItem from "./CartItem";
import Form from "./Form";
import { saveOrder } from "../services/saveOrder";

const Cart = () => {
    const { products, calculateTotal } = useContext(Shop);
    const confirmPurchase = () => {
        (async () => {
           await saveOrder(
            "Sebas",
            11111122222,
            "sebas@live.com",
            products,
            calculateTotal()
           )
        })();
    };
    return <>
        {products.length > 0 ? <div>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <p className="total-cart">Total: {`${calculateTotal()}`}$</p>
            <Form />
            <button className="btn btn-success p-3" onClick={confirmPurchase}>
                Confirmar compra
            </button>
            </div>
            :
            <div className="no-hay-productos">
                <h2>No hay productos en tu carrito</h2>
                <Link to={'/category/all'}>
                    <button className="btn btn-success p-3">
                        Comprar Productos
                    </button>
                </Link>
            </div>
         }
    </>
}

export default Cart;