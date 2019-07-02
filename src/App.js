import React from "react";
import Landing from "./components/landing/Landing";
import ReadBible from "./components/read/ReadBible";
import "./components/common/common.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Route path="/" exact component={Landing} />
    <Route path="/read" exact component={ReadBible} />
  </BrowserRouter>
);
export default App;
