import React from "react";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import CartSummary from "../cartcomponent/CartSummary";
import Checkout from "../checkOut/CheckOut";
import Payment from "../checkOut/Payment";
import Nav from "../Navbar/Nav";
import AboutUs from "../About/About";
import ProductCard from "../AllProducts/ProductCard";
import ProductDetails from "../productDetails/ProductDetails";
import Checkout2 from "../checkOut/CheckOut2";
import Privacy from "../Privacy-policy/Privacy";
import Payment2 from "../checkOut/Payment2";
import ThankYouPage from "../thanks/ThankYouPage";
import Term from "../termandcondition/Term";
import Return from "../termandcondition/Return";
import DeleveryTerms from "../termandcondition/DeleveryTerms";
import Payment3 from "../checkOut/Payment3";
import Failur from "../failure/Failure";

function Page() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Header />
          <Nav />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:category?" element={<ProductCard />} />
          <Route exact path="/About" element={<AboutUs />} />
          <Route exact path="/Cart-Summery" element={<CartSummary />} />
          <Route exact path="/CheckOut" element={<Checkout />} />
          <Route exact path="/CheckOut-Product" element={<Checkout2 />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Payment2" element={<Payment2 />} />
          <Route exact path="/Payment3" element={<Payment3 />} />
          <Route
            exact
            path="/ProductDetails/:id?"
            element={<ProductDetails />}
          />
          <Route exact path="/privacy-policy" element={<Privacy />} />
          <Route exact path="/Returns-Refunds" element={<Return />} />
          <Route exact path="/Shipping-Delivery" element={<DeleveryTerms />} />
          <Route exact path="/Order-confirm" element={<ThankYouPage />} />
          <Route exact path="/Order-failed" element={<Failur />} />
          <Route exact path="/term-condition" element={<Term />} />
        </Routes>
        {/* footer */}

        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default Page;
