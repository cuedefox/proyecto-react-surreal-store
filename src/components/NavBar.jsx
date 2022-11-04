import {React, useState} from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [linkActive, setLinkActive] = useState("inicio");

    const desplegarMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return <>
        <nav className="menu">
            <Link className="logo" to={"/"} >
                <h2>Surreal Store</h2>
            </Link>
            <ul className={mobileMenu ? "menu-items show" : "menu-items"}>
                <li><Link className={linkActive == "inicio" ? "active" : null} onClick={() => setLinkActive("inicio")} to={"/"}>Inicio</Link></li>
                <li><Link className={linkActive == "categorias" ? "active" : null} onClick={() => setLinkActive("categorias")} to={"/category/all"}>categorias</Link></li>
                <li><Link className={linkActive == "sobre" ? "active" : null} onClick={() => setLinkActive("sobre")} to={"/about-us"}>Sobre Nosotros</Link></li>
                <li><Link className={linkActive == "faq" ? "active" : null} onClick={() => setLinkActive("faq")} to={"/faq"}>FAQ</Link></li>
                <li className="cart-nav"><Link className={linkActive == "cart" ? "active" : null} onClick={() => setLinkActive("cart")} to={"/cart"}><CartWidget /></Link></li>
            </ul>
            <div className="menu-bars" onClick={desplegarMenu}>
                <span className={mobileMenu ? "activelinea1-menu-bar" : "linea1-menu-bar"}></span>
                <span className={mobileMenu ? "activelinea2-menu-bar" : "linea2-menu-bar"}></span>
                <span className={mobileMenu ? "activelinea3-menu-bar" : "linea3-menu-bar"}></span>
            </div>
        </nav>
    </>
}

export default NavBar;