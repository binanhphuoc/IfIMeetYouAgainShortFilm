import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/index";
import NotFound from "./404/index"

export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </main>
  );
};
