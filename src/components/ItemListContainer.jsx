import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        getFetch
        .then(response => {
            if(category === "all" || category == undefined) {
                setItems(response);
            }else {
                let products = response.filter(product => product.category === category);
                setItems(products);
            }
        })
        .catch(err => console.log(`error: ${err}`))
        .finally(() => setLoading(false));
    }, [category]);

    return <div>
        {
            loading ?  <Spinner />
            : <ItemList items={items} />
        }
    </div>
}

export default ItemListContainer;