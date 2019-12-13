import React, { useContext, useEffect } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Router, navigate } from "@reach/router";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { useData } from "./hooks/useData";
import * as api from "./api/init";
import * as usersApi from "./api/users";

if (process.env.NODE_ENV === "development") {
  window.navigate = navigate;
}

const storage = { state: null, set: () => {} }; //FIXME: localStorage

const AppContext = React.createContext({});

export const useApp = () => useContext(AppContext);

export const App = () => {
  const app = useLocalStore(() => ({
    groups: [],
    user: null,
    loading: false,
    get loggedIn() {
      return Boolean(app.user);
    },
    login({ user }) {
      app.loading = true;
      usersApi
        .details(user.id)()
        .then(({ data }) => {
          app.user = user;
          app.groups = data.user.groupsIn;
          navigate("/profile");
          app.loading = false;
        });
    }
  }));

  const { errors, data, isLoading } = useData(api.init(storage.state));

  useEffect(() => {
    if (data) {
      storage.set(data);
      app.groups = data.groups;
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <>
        <AppContext.Provider value={app}>
          <Layout
            groups={app.groups}
            loggedIn={app.loggedIn}
            loading={app.loading}
          >
            <Router>
              <Home path="/" />
              <Group path="group" />
              <Login path="login" />
              <Profile path="profile" />
            </Router>
          </Layout>
        </AppContext.Provider>
      </>
    );
  });
};
