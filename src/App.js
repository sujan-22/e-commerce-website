import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/clothing"
            element={<ShopCategory banner={men_banner} category="Clothes" />}
          />
          <Route
            path="/electronics"
            element={
              <ShopCategory banner={women_banner} category="Electronics" />
            }
          />
          <Route
            path="/furniture"
            element={<ShopCategory banner={kid_banner} category="Furniture" />}
          />
          <Route
            path="/shoes"
            element={<ShopCategory banner={kid_banner} category="Shoes" />}
          />
          <Route
            path="/all"
            element={
              <ShopCategory banner={kid_banner} category="Miscellaneous" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
