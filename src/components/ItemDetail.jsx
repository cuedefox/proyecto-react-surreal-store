import React, { useContext } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { Shop } from "../contexts/Shop";

const ItemDetail = ({item}) => {
    const [goToCart, setGoToCart] = useState(false);
    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const onAdd = (quantity) => {
        addProduct({...item, quantity})
        setQuantityItemDetail(quantity);
        setGoToCart(true);
    }
    const {addProduct} = useContext(Shop);

    const cargarImagen = require.context("../assets/imgitem", true);

    return <div className="item-detail">
        <img src={cargarImagen(`./${item.pictureUrl}`)} alt={item.name} className="detail-img" />
        <div className="detail-info">
            <h2>{item.name}</h2>
            <p><span>${item.price}</span></p>
            {
                goToCart ? <Link to={'/cart'}><button type="button" className="btn btn-primary btn-lg">Ir al Carrito :D</button></Link>
                : item.stock == 0 ? <h5>No hay stock de este producto</h5> : <ItemCount stock={item.stock} onAdd={onAdd} />
            }
        </div>
        <div className="detail-description">
            <h3>Descripcion del producto</h3>
            <p>{`${item.description}.`}</p>
        </div>
    </div>
}

export default ItemDetail;