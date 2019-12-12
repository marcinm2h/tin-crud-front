import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";

export const Home = ({ errors, data = Home.defaultData, isLoading }) => {
  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>Strona główna</Page.Header>
      <Page.Body>
        <Post />
        {/* <Pagination /> */}
      </Page.Body>
    </Page>
  );
};
