import React, { useState } from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import * as api from "../api/groups";
import { useApp } from "../App";

export const GroupRemove = ({ groupId }) => {
  const app = useApp();
  const [success, setSuccess] = useState(false);
  const remove = () =>
    api
      .remove(groupId)()
      .then(({ errors }) => {
        if (errors) {
          return;
        }
        app.loading = true;
        app.updateGroups().then(() => {
          app.loading = false;
          setSuccess(true);
        });
      });

  if (success) {
    return <Success />;
  }

  return (
    <Page>
      <Page.Header>Czy na pewno chcesz usunąć grupę?</Page.Header>
      <Page.Body>
        <Poster.Question>
          <Poster.Actions>
            <Poster.Actions.Button onClick={() => app.navigate("/groups")}>
              Nie
            </Poster.Actions.Button>
            <Poster.Actions.Button onClick={() => remove()}>
              Tak
            </Poster.Actions.Button>
          </Poster.Actions>
        </Poster.Question>
      </Page.Body>
    </Page>
  );
};

const Success = () => {
  return (
    <Page>
      <Page.Header>Sukces</Page.Header>
      <Page.Body>
        <Poster.Success>
          <Poster.Title>Pomyślnie usunięto grupę</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/groups`}>tu</Link> wrócić na stronę grup.
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
