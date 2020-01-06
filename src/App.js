import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home/homepage.component";

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
      </Switch>
    </div>
  );
}

export default App;
