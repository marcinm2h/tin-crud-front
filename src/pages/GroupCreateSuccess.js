import React from "react";
import { Link } from "../components/Link";
import { Page } from "../components/Page";
import { Poster } from "../components/Poster";

export const GroupCreateSuccess = ({ groupId }) => {
  return (
    <Page>
      <Page.Header>Sukces</Page.Header>
      <Page.Body>
        <Poster.Success>
          <Poster.Title>Pomyślnie utworzono nową grupę</Poster.Title>
          <Poster.Subtitle>
            Kliknij <Link href={`/group/${groupId}`}>tu</Link> aby zobaczyć
            stronę grupy
          </Poster.Subtitle>
        </Poster.Success>
      </Page.Body>
    </Page>
  );
};
