import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getFetch
        .then(response => {
            if(categoryId === "all" || categoryId == undefined) {
                setItems(response);
            }else {
                let products = response.filter(product => product.category === categoryId);
                setItems(products);
            }
        })
        .catch(err => console.log(`error: ${err}`))
        .finally(() => setLoading(false));
    }, [categoryId]);

    return <div>
        {
            loading ?  <Spinner />
            : <ItemList items={items} />
        }
    </div>
}

export default ItemListContainer;