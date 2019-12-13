import React from "react";
import { Page } from "../components/Page";
import { useApp } from "../App";
import { Button } from "../components/Button";

export const Profile = () => {
  const app = useApp();
  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  return (
    <Page>
      <Page.Header>Witaj, {app.user.login}!</Page.Header>
      <Page.Body>
        <Button onClick={app.logout}>Wyloguj się</Button>
      </Page.Body>
    </Page>
  );
};
