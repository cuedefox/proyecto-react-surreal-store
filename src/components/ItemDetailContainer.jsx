import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        getFetch
        .then(resp => setItem(resp.find(item => item.id === parseInt(id))))
        .finally(() => setLoading(false))
    }, []);

    return(<div>
        {loading ? <Spinner />
        :
        <ItemDetail item={item} />}   
    </div>)
}

export default ItemDetailContainer;