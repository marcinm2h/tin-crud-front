import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/posts";
import { useData } from "../hooks/useData";

export const Group = () => {
  const { errors, data = Group.defaultData, isLoading } = useData(
    api.starWars()
  );

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>#PROGRAMOWANIE</Page.Header>
      <Page.Body>
        <Post />
        <Pagination />
      </Page.Body>
    </Page>
  );
};
