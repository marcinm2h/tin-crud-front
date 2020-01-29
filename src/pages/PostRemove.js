import React, { useState } from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import * as api from "../api/posts";
import { useApp } from "../App";

export const PostRemove = ({ postId }) => {
  const app = useApp();
  const [success, setSuccess] = useState(false);
  const remove = () =>
    api
      .remove(postId)()
      .then(({ errors }) => {
        if (errors) {
          return;
        }
        setSuccess(true);
      });

  if (success) {
    return <Success />;
  }

  return (
    <Page>
      <Page.Header>Czy na pewno chcesz usunąć post?</Page.Header>
      <Page.Body>
        <Poster.Question>
          <Poster.Actions>
            <Poster.Actions.Button onClick={() => app.navigate("/")}>
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
          <Poster.Title>Pomyślnie usunięto post</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/`}>tu</Link> wrócić na stronę główną.
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
