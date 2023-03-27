import React from "react";
import { Route } from "react-router";
import About from "./pages/about";
import Home from "./pages";

export default function Router() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </>
  );
}
