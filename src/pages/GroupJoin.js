import React, { useState } from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import * as api from "../api/groups";
import { useApp } from "../App";

export const GroupJoin = ({ groupId }) => {
  const app = useApp();
  const [success, setSuccess] = useState(false);
  const join = () =>
    api
      .join(groupId)()
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
    return <Success groupId={groupId}/>;
  }

  return (
    <Page>
      <Page.Header>Czy chcesz dołączyć do grupy?</Page.Header>
      <Page.Body>
        <Poster.Question>
          <Poster.Actions>
            <Poster.Actions.Button onClick={() => app.navigate("/groups")}>
              Nie
            </Poster.Actions.Button>
            <Poster.Actions.Button onClick={() => join()}>
              Tak
            </Poster.Actions.Button>
          </Poster.Actions>
        </Poster.Question>
      </Page.Body>
    </Page>
  );
};

const Success = ({ groupId }) => {
  return (
    <Page>
      <Page.Header>Sukces</Page.Header>
      <Page.Body>
        <Poster.Success>
          <Poster.Title>Dołączono do grupy</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/group/${groupId}`}>tu</Link> by przejść na stronę grupy.
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
