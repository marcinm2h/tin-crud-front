import React from "react";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { Pagination } from "../components/Pagination";
import * as api from "../api/groups";
import { useData } from "../hooks/useData";

export const GroupUsers = ({ groupId }) => {
  const { errors, data, isLoading } = useData(api.details(groupId));

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>
        Użytkownicy grupy {data.group.name}
      </Page.Header>
      <Page.Body>
        {data.group.users.map(user => (
          <User key={user.id} {...user} />
        ))}
        {data.pages && <Pagination {...data.pages} />}
      </Page.Body>
    </Page>
  );
};
