import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        const getProductDetail = async () => {
            const docRef = doc(db, "productos", id);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setItem({...docSnap.data(), id: docSnap.id});
                setLoading(false);
            } else {
                console.log("No such document!");
            }
        }

        getProductDetail()
    }, [id])

    return(<div className="item-detail-container">
        {loading ? <Spinner />
        :
        <ItemDetail item={item} />}   
    </div>)
}

export default ItemDetailContainer;