import Router from "./components/Router";
import FormProvider from "./contexts/Form";
import ShopProvider from "./contexts/Shop";
import "./main.css"

function App() {
  return <>
    <ShopProvider>
      <FormProvider>
        <Router />
      </FormProvider>
    </ShopProvider>
  </>
}

export default App;
