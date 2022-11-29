import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { db } from "../firebase/config";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        (async () => {
            try {
                let q = categoryId == 'all' ? query(collection(db, "productos"))
                : query(collection(db, "productos"), where("category", "==", categoryId));

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                    productosFirebase.push({...doc.data(), id: doc.id})
                });
                setItems(productosFirebase);
                setLoading(false);
            } catch (error) {
            }
        })();
    }, [categoryId]);

    return <div>
        {
            loading ?  <Spinner />
            : <ItemList items={items} />
        }
    </div>
}

export default ItemListContainer;