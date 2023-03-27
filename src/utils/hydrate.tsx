import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";

if (typeof window !== "undefined") {
  hydrate(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
