import React from "react";
import { Router } from "@reach/router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Home path="/" />
          <Group path="group" />
          <Login path="login" />
        </Router>
      </Layout>
    </div>
  );
};
