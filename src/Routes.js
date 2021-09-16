import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SingleGrid from "./components/SingleGrid";

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SingleGrid} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;