import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [itemStock, setItemStock] = useState(stock);
    const [cantidad, setCantidad] = useState(1);
    const [itemAdd, setItemAdd] = useState(0);

    const CambiarCantidad = (valor) => {
        if (valor > 0 && valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const AgregarProductos = () => {
        if(cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
        if (itemStock < 1) {
            setCantidad(0);
        }else {
            setCantidad(1);
        }
    }

    return <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 center">
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => 
                        {CambiarCantidad(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => 
                        {CambiarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-2">
                        <button className="btn btn-secondary" type="button" onClick={() =>
                        {AgregarProductos()}}>Agregar</button>
                    </div>
                    <p>Cantidad de productos agregados: {itemAdd}</p>
                </div>
            </div>
        </div>
    </>
}

export default ItemCount;