import React from "react";
import { Page } from "../components/Page";
import { Post as PostComponent } from "../components/Post";
import { Comment } from "../components/Comment";
import * as api from "../api/posts";
import { useData } from "../hooks/useData";

export const Post = ({ postId }) => {
  const { errors, data, isLoading } = useData(api.details(postId));

  if (isLoading) {
    return <Page.Loader />;
  }

  if (errors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>Post</Page.Header>
      <Page.Body>
        <PostComponent details {...data.post} />
        {data.post.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </Page.Body>
    </Page>
  );
};
