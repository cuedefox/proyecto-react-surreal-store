import Router from "./components/Router";
import ShopProvider from "./contexts/Shop";
import "./main.css"

function App() {
  return <>
    <ShopProvider>
      <Router />
    </ShopProvider>
  </>
}

export default App;
