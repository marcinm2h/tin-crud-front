import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/groups";
import { useData } from "../hooks/useData";

export const Group = ({ groupId }) => {
  console.log({ groupId});
  const { errors, data, isLoading } = useData(api.details(groupId), [groupId]);

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>#{data.tag}</Page.Header>
      <Page.Body>
        {data.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
        <Pagination />
      </Page.Body>
    </Page>
  );
};
