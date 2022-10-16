import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import NavBar from "./components/NavBar";
import "./main.css"

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
