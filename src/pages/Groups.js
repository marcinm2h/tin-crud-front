import React from "react";
import { Group } from "../components/Group";
import { Page } from "../components/Page";
import { Pagination } from "../components/Pagination";
import * as api from "../api/groups";
import { useData } from "../hooks/useData";

export const Groups = () => {
  const { errors, data, isLoading } = useData(api.list());

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header
        action={
          <Page.Header.Action href="/group-create">
            Utwórz grupę
          </Page.Header.Action>
        }
      >
        Grupy
      </Page.Header>
      <Page.Body>
        {data.groups.map(group => (
          <Group key={group.id} {...group} />
        ))}
        {data.pages && <Pagination {...data.pages} />}
      </Page.Body>
    </Page>
  );
};
