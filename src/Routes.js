import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Board from "./components/pages/Board";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Board} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
