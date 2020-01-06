import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact="true" path="/" component={HomePage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
