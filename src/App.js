import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/LandingPage/Header";
import LandingPage from "./screens/LandingPage";
import "./styles/main.css";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" component={LandingPage} exact />
    </div>
  );
};

export default App;
