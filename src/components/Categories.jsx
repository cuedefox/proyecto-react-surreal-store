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
        <h2>Categorias</h2>
        <div>
            <div>
                <Link to={'category/tiempo'}>
                    <img src={cargarImagen('./tiempo.jpg')} alt="categoria de tiempo" />
                    <h3>Tiempo</h3>
                </Link>
            </div>
            <div>
                <Link to={'category/cosas'}>
                    <img src={cargarImagen('./cosas.jpg')} alt="categoria de cosas" />
                    <h3>Cosas</h3>
                </Link>
            </div>
            <div>
                <Link to={'category/colores'}>
                    <img src={cargarImagen('./colores.jpg')} alt="categoria de colores" />
                    <h3>Colores</h3>
                </Link>
            </div>
        </div>
    </div>
}

export default Categories;