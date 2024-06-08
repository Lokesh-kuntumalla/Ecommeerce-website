import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import Shopcategory from "./Pages/Shopcategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/MEN" element={<Shopcategory category="MEN" />} />
          <Route path="/WOMEN" element={<Shopcategory category="Women" />} />
          <Route path="/KIDS" element={<Shopcategory category="KIDS" />} />
          <Route path="/Product" element={<Product />} />
          <Route path=":Product ID" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
