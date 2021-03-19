import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const cliente = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={cliente}>
    <App></App>
  </ApolloProvider>,

  document.getElementById("root")
);
