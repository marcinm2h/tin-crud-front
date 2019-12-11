import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";

export const Group = ({ errors, data = Group.defaultData, isLoading }) => {
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
