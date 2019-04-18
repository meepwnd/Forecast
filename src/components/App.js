import React from "react";
import Today from "./Today";
import Forecast from "./Forecast";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import "normalize-css/normalize.css";
import "../styles/main.scss";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Today} />
        <Route path={`/forecast/:city`} component={Forecast} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
