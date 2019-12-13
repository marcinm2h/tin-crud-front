import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Router, navigate } from "@reach/router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { Login } from "./pages/Login";
import { useData } from "./hooks/useData";
import * as api from "./api/init";

if (process.env.NODE_ENV === "development") {
  window.navigate = navigate;
}

const storage = { state: null, set: () => {} }; //FIXME: localStorage

export const App = () => {
  const app = useLocalStore(() => ({
    groups: []
  }));
  const { errors, data, isLoading } = useData(api.init(storage.state));
  if (data) {
    storage.set(data);
    app.groups = data.groups;
  }

  return useObserver(() => {
    if (isLoading) {
      return <Layout.Loader>Trwa wczytywanie</Layout.Loader>;
    }

    if (errors) {
      return (
        <Layout.Errors log={errors}>Aby ponowić odśwież stronę</Layout.Errors>
      );
    }

    return (
      <div>
        <Layout groups={app.groups}>
          <Router>
            <Home path="/" />
            <Group path="group" />
            <Login path="login" />
          </Router>
        </Layout>
      </div>
    );
  });
};
