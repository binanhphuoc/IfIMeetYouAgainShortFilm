import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./home/index";
import NotFound from "./404/index";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
