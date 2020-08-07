import React from "react";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages/index";
import Header from "../header";

const App = function () {
  return (
    <>
      <Header title="My Book Store" numItems={3} total={"$250"} />
      <main rol="main" className="container-fluid">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    </>
  );
};

export default App;
