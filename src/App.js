import React from "react";
import { Router } from "@reach/router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";

export const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Home path="/" />
          <Group path="group" />
        </Router>
      </Layout>
    </div>
  );
};
