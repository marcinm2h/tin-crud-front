import React from "react";
import { Page } from "../components/Page";
import { useApp } from "../App";

export const Profile = () => {
  const app = useApp();
  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  return (
    <Page>
      <Page.Header>Witaj, {app.user.login}!</Page.Header>
    </Page>
  );
};
