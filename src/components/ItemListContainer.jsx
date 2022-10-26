import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({titulo}) => {
    return <>
        <h1>{titulo}</h1>
        <ItemCount stock={10} initial={1} />
    </>
}

export default ItemListContainer;