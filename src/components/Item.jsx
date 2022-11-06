import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    const cargarImagen = require.context("../assets/imgitem", true);

    return <div className="item-card">
        <img src={cargarImagen(`./${item.pictureUrl}`)} alt={item.name} />
        <div>
            <h5>{item.name}</h5>
            <p>${item.price}</p>
            <Link to={`/detail/${item.id}`}>
                <button type="button" className="card-button">Comprar ahora</button>
            </Link>
        </div>
    </div>
}

export default Item;