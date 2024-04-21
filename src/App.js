import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import { ShopContext } from "./Context/ShopContext";
import MoveToTop from "./Pages/moveToTop";
import { DNA } from "react-loader-spinner";

function App() {
  const { loading } = useContext(ShopContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDataLoaded(!loading);
  }, [loading]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {loading ? (
        <div className="loader-container">
          <DNA
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        dataLoaded && (
          <BrowserRouter>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MoveToTop />
            <TransitionGroup>
              <CSSTransition
                key={window.location.key}
                classNames="fade"
                timeout={300}
              >
                <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route
                    path="/electronics"
                    element={<ShopCategory category="electronics" />}
                  />
                  <Route
                    path="/home-decoration"
                    element={<ShopCategory category="home-decoration" />}
                  />
                  <Route
                    path="/furniture"
                    element={<ShopCategory category="furniture" />}
                  />
                  <Route
                    path="/lighting"
                    element={<ShopCategory category="lighting" />}
                  />
                  <Route
                    path="/sports"
                    element={<ShopCategory category="sports" />}
                  />
                  <Route path="/product" element={<Product />}>
                    <Route path=":productId" element={<Product />} />
                  </Route>
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </BrowserRouter>
        )
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
