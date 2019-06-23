import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage";
import FormPage from "./FormPage.jsx";
import SummaryPage from "./SummaryPage";

import "normalize.css";
import "../assets/styles/main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/forms" exact component={FormPage} />
      <Route path="/summary" exact component={SummaryPage} />
    </BrowserRouter>
  );
};

export default App;
