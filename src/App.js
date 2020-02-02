import React, { useContext, useEffect } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { Router, navigate } from "@reach/router";

import { Layout } from "./components/Layout";
import { RoleContext } from "./components/RoleContext";
import { Home } from "./pages/Home";
import { Group } from "./pages/Group";
import { GroupCreate } from "./pages/GroupCreate";
import { GroupCreateSuccess } from "./pages/GroupCreateSuccess";
import { GroupRemove } from "./pages/GroupRemove";
import { Groups } from "./pages/Groups";
import { GroupUsers } from "./pages/GroupUsers";
import { GroupJoin } from "./pages/GroupJoin";
import { GroupLeave } from "./pages/GroupLeave";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";
import { PostEdit } from "./pages/PostEdit";
import { PostEditSuccess } from "./pages/PostEditSuccess";
import { PostRemove } from "./pages/PostRemove";
import { PostCreate } from "./pages/PostCreate";
import { Register } from "./pages/Register";
import { RegisterSuccess } from "./pages/RegisterSuccess";
import { useData } from "./hooks/useData";

import * as init from "./api/init";
import * as users from "./api/users";
import * as auth from "./api/auth";
import { GroupEdit } from "./pages/GroupEdit";
import { GroupEditSuccess } from "./pages/GroupEditSuccess";

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
    updateGroups() {
      return init
        .init()()
        .then(({ data }) => {
          storage.set(data);
          app.groups = data.groups;
        });
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
      app.admin = false;
      users
        .details(user.id)()
        .then(({ data }) => {
          app.user = user;
          app.updateGroups().then(() => {
            app.navigate("/profile");
            app.loading = false;
          })
        });
    },
    logout() {
      app.loading = true;
      app.admin = false;
      auth
        .logout()()
        .then(() => {
          app.user = null;
          app.updateGroups().then(() => {
            app.navigate("/");
            app.loading = false;
          });
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
                <Register path="register" />
                <RegisterSuccess path="register-success" />
                <Login path="login-admin" asAdmin />
                <Profile path="profile" />
                <Post path="post/:postId" />
                <PostRemove path="post-remove/:postId" />
                <PostEdit path="post-edit/:postId" />
                <PostEditSuccess path="post-edit-success/:postId" />
                <Groups path="groups" />
                <Group path="group/:groupId" />
                <GroupUsers path="group-users/:groupId" />
                <GroupCreate path="group-create" />
                <GroupCreateSuccess path="group-create-success/:groupId" />
                <GroupEdit path="group-edit/:groupId" />
                <GroupEditSuccess path="group-edit-success/:groupId" />
                <GroupJoin path="group-join/:groupId" />
                <GroupLeave path="group-leave/:groupId" />
                <GroupRemove path="group-remove/:groupId" />
                <PostCreate path="post-create" />
              </Router>
            </Layout>
          </RoleContext.Provider>
        </AppContext.Provider>
      </>
    );
  });
};
