import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    const cargarImagen = require.context("../assets/imgitem", true);

    return <div className="item-detail">
        <img src={cargarImagen(`./${item.pictureUrl}`)} alt={item.name} className="detail-img" />
        <div className="detail-info">
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} />
        </div>
        <div className="detail-description">
            <h3>Descripcion del producto</h3>
            <p>{`${item.description}.`}</p>
        </div>

    </div>
}

export default ItemDetail;