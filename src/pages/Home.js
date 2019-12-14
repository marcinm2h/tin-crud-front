import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/home";
import { useData } from "../hooks/useData";

export const Home = () => {
  const { errors, data, isLoading } = useData(api.home());

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
        {data.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
        {data.posts.length === 0 ? <Post.Empty /> : null}
        {data.pages && <Pagination {...data.pages} />}
      </Page.Body>
    </Page>
  );
};
