import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/posts";
import { useData } from "../hooks/useData";

export const Home = () => {
  const { errors, data, isLoading } = useData(api.list());

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Page.Header>Strona główna</Page.Header>
      <Page.Body>
        <Post />
        <Pagination />
      </Page.Body>
    </Page>
  );
};
