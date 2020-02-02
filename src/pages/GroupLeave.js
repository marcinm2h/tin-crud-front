import React, { useState } from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import * as api from "../api/groups";
import { useApp } from "../App";

export const GroupLeave = ({ groupId }) => {
  const app = useApp();
  const [success, setSuccess] = useState(false);
  const leave = () =>
    api
      .leave(groupId)()
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
      <Page.Header>Czy chcesz opuścić grupę?</Page.Header>
      <Page.Body>
        <Poster.Question>
          <Poster.Actions>
            <Poster.Actions.Button onClick={() => app.navigate("/groups")}>
              Nie
            </Poster.Actions.Button>
            <Poster.Actions.Button onClick={() => leave()}>
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
          <Poster.Title>Opuszczono grupę</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/`}>tu</Link> by przejść na stronę główną.
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
