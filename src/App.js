import React, { useContext, useEffect } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Router, navigate } from "@reach/router";

import { Layout } from "./components/Layout";
import { RoleContext } from "./components/RoleContext";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { GroupCreate } from "./pages/GroupCreate";
import { GroupCreateSuccess } from "./pages/GroupCreateSuccess";
import { Groups } from "./pages/Groups";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { PostCreate } from "./pages/PostCreate";
import { useData } from "./hooks/useData";

import * as init from "./api/init";
import * as users from "./api/users";
import * as auth from "./api/auth";

if (process.env.NODE_ENV === "development") {
  window.navigate = navigate;
}

const storage = {
  state: null,
  set: state => {
    storage.state = state;
  }
}; //FIXME: localStorage

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
    navigate(...args) {
      return navigate(...args);
    },
    loginAdmin({ admin }) {
      app.admin = true;
      app.user = admin;
      app.navigate("/");
    },
    login({ user }) {
      app.loading = true;
      users
        .details(user.id)()
        .then(({ data }) => {
          app.user = user;
          app.groups = data.user.groupsIn;
          app.navigate("/profile");
          app.loading = false;
        });
    },
    logout() {
      app.loading = true;
      auth
        .logout()()
        .then(() => {
          app.user = null;
          app.groups = storage.state.groups;
          app.navigate("/");
          app.loading = false;
        });
    }
  }));

  const { errors, data, isLoading } = useData(init.init(storage.state));

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
          <RoleContext.Provider
            value={{
              admin: app.admin,
              user: app.loggedIn
            }}
          >
            <Layout
              groups={app.groups}
              loggedIn={app.loggedIn}
              loading={app.loading}
            >
              <Router>
                <Home path="/" />
                <Login path="login" />
                <Login path="login-admin" asAdmin />
                <Profile path="profile" />
                <Groups path="groups" />
                <Group path="group/:groupId" />
                <GroupCreate path="group-create" />
                <GroupCreateSuccess path="group-create-success/:groupId" />
                <PostCreate path="post-create" />
              </Router>
            </Layout>
          </RoleContext.Provider>
        </AppContext.Provider>
      </>
    );
  });
};
