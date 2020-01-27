import React from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";

export const RegisterSuccess = () => {
  return (
    <Page>
      <Page.Header>Sukces</Page.Header>
      <Page.Body>
        <Poster.Success>
          <Poster.Title>Zarejestrowano nowego uzytkownika</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={'/login'}>tu</Link> aby zalogować się po raz pierwszy
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
