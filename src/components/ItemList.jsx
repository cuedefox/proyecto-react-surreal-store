import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return <div className="item-list">
        {
            items.map(item => (
                <div key={item.id}>
                    <Item item={item} />
                </div>
            ))
        }
    </div>
}

export default ItemList;