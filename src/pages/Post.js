import React from "react";
import { Page } from "../components/Page";
import { Post as PostComponent } from "../components/Post";
import { Comment } from "../components/Comment";
import * as api from "../api/posts";
import { useData } from "../hooks/useData";

export const Post = ({ postId }) => {
  const { errors, data, isLoading, updateData } = useData(api.details(postId));

  const onVoteFor = (id) => {
    api.vote(id, 'for')().then(({ data, errors }) => {
      if (errors) {
        throw (errors);
      }
      updateData(({ post }) => {
        return {
          post: {
            ...post,
            votesFor: data.post.votesFor,
          }
        }
      })
    }).catch((e) => alert(e));
  }

  const onVoteAgainst = (id) => {
    api.vote(id, 'against')().then(({ data, errors }) => {
      if (errors) {
        throw errors;
      }
      updateData(({ post }) => {
        return {
          post: {
            ...post,
            votesAgainst: data.post.votesAgainst,
          }
        }
      })
    }).catch((e) => alert(e));
  }

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
        <PostComponent details {...data.post}
          onVoteAgainst={() => onVoteAgainst(data.post.id)}
          onVoteFor={() => onVoteFor(data.post.id)}
        />
        {data.post.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </Page.Body>
    </Page>
  );
};
