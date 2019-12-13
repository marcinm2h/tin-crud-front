import React from "react";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import { Button } from "../components/Button";
import { useApp } from "../App";

export const Profile = () => {
  const app = useApp();
  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  return (
    <Page>
      <Page.Header>Witaj, {app.user.login}!</Page.Header>
      <Page.Body>
        <Poster>
          <Poster.Subtitle>
            <Button onClick={app.logout}>Wyloguj się</Button>
          </Poster.Subtitle>
        </Poster>
      </Page.Body>
    </Page>
  );
};
