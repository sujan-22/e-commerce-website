import React, { useContext, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Store from "./Pages/Store";
import Cart from "./Pages/Cart";
import Account from "./Account/Account";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import { ShopContext } from "./Context/ShopContext";
import MoveToTop from "./Pages/moveToTop";

function App() {
  const { loading } = useContext(ShopContext);
  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect to monitor loading state and update dataLoaded accordingly
  useEffect(() => {
    setDataLoaded(!loading);
  }, [loading]);

  return (
    <div>
      {loading ? ( // Conditionally render loader if loading is true
        <div className="loader-container">
          <PropagateLoader color="blue" loading={loading} size={15} />
        </div>
      ) : (
        dataLoaded && (
          <BrowserRouter>
            <Navbar />
            <MoveToTop />
            <TransitionGroup>
              <CSSTransition
                key={window.location.key}
                classNames="fade"
                timeout={300}
              >
                <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route path="/store" element={<Store />}>
                    <Route
                      index
                      element={<ShopCategory category="electronics" />}
                    />
                    <Route
                      path="/store/electronics"
                      element={<ShopCategory category="electronics" />}
                    />
                    <Route
                      path="/store/home-decoration"
                      element={<ShopCategory category="home-decoration" />}
                    />
                    <Route
                      path="/store/furniture"
                      element={<ShopCategory category="furniture" />}
                    />
                    <Route
                      path="/store/lighting"
                      element={<ShopCategory category="lighting" />}
                    />
                    <Route
                      path="/store/sports"
                      element={<ShopCategory category="sports" />}
                    />
                  </Route>
                  <Route path="/product" element={<Product />}>
                    <Route path=":productId" element={<Product />} />
                  </Route>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/account" element={<Account />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </BrowserRouter>
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
