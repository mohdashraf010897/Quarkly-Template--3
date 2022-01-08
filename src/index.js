import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QAPI from "qapi";
import { Auth0Provider } from "@auth0/auth0-react";

window.QAPI = QAPI;
ReactDOM.render(
  <Auth0Provider
    domain="dev-62vd8h96.us.auth0.com"
    clientId="6dkBgRApMTcicfpmq88yk8snomv1ssVe"
    redirectUri="https://quarkly-template-3.netlify.app/faceted-search/"
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
