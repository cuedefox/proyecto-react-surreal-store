import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HomeContainer from "./components/HomeContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./main.css"

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route exact path="/category/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:articulo" element={<ItemDetailContainer />} />
        <Route exact path="/sobre-nosotros" element={<AboutUs />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
