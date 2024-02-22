import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import store from "./redux/store";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
