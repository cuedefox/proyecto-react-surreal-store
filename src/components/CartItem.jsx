import { React, useContext } from "react";
import { Shop } from "../contexts/Shop";
import trash from '../assets/icons/trash.svg';

const CartItem = ({item}) => {

    const {removeProduct} = useContext(Shop);
  
    const handleRemove = () => {
      removeProduct(item.id)
    }

    const cargarImagen = require.context("../assets/imgitem", true);
  
    return <div className="brief">
        <img src={cargarImagen(`./${item.pictureUrl}`)} width={150} alt='cart-item'/>
        <h1>{item.name}</h1>
        <p>{item.quantity}</p>
        <div style={{width: 30}} onClick={handleRemove}>
            <img src={trash} alt={`Bote de basura para eliminar ${item.name}`} />
        </div>
    </div>
}

export default CartItem;