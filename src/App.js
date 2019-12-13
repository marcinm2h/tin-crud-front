import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Router, navigate } from "@reach/router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { Login } from "./pages/Login";
import { useData } from "./hooks/useData";

if (process.env.NODE_ENV === "development") {
  window.navigate = navigate;
}

const groupsApi = {
  top: () => () =>
    new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => ({
      data: {
        groups: [
          { name: "programming", url: "group-programming.html" },
          { name: "gaming", url: "group-programming.html" },
          { name: "gym", url: "group-programming.html" },
          { name: "poland", url: "group-programming.html" },
          { name: "beer", url: "group-programming.html" },
          { name: "java", url: "group-programming.html" },
          { name: "ux", url: "group-programming.html" },
          { name: "design", url: "group-programming.html" },
          { name: "ios", url: "group-programming.html" },
          { name: "apple", url: "group-programming.html" },
          { name: "linux", url: "group-programming.html" }
        ]
      }
    }))
};

export const App = () => {
  const app = useLocalStore(() => ({
    groups: []
  }));
  const { errors, data, isLoading } = useData([groupsApi.top()]);
  if (data) {
    const [groupsData] = data;
    app.groups = groupsData.groups;
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
