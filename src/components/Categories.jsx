import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/img/background-categories.webp"

const Categories = () => {
    const cargarImagen = require.context("../assets/img", true);

    const backImg={
        backgroundImage: 
        `url(${backgroundImg})`
    }

    return <div className="categories" style={backImg}>
        <Link to={'category/all'}>
            <h2>Productos</h2>
        </Link>
        <div>
            <div className="tiempo">
                <Link to={'category/tiempo'}>
                    <img src={cargarImagen('./tiempo.jpg')} alt="categoria de tiempo" />
                    <h3>Tiempo</h3>
                </Link>
            </div>
            <div className="cosas">
                <Link to={'category/cosas'}>
                    <img src={cargarImagen('./cosas.jpg')} alt="categoria de cosas" />
                    <h3>Cosas</h3>
                </Link>
            </div>
            <div className="colores">
                <Link to={'category/colores'}>
                    <img src={cargarImagen('./colores.jpg')} alt="categoria de colores" />
                    <h3>Colores</h3>
                </Link>
            </div>
            <div className="sentimientos">
                <Link to={'category/sentimientos'}>
                    <img src={cargarImagen('./sentimientos.jpg')} alt="categoria de sentimientos" />
                    <h3>Sentimientos</h3>
                </Link>
            </div>
        </div>
    </div>
}

export default Categories;