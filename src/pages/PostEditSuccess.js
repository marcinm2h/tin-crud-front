import React from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";
import { useApp } from "../App";

export const PostEditSuccess = ({ postId }) => {
  const app = useApp();
  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }
  return (
    <Page>
      <Page.Header>Sukces</Page.Header>
      <Page.Body>
        <Poster.Success>
          <Poster.Title>Pomyślnie zmieniono post</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/post/${postId}`}>tu</Link> aby go zobaczyć
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
