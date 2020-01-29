import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/groups";
import * as postsApi from "../api/posts";
import { useData } from "../hooks/useData";

export const Group = ({ groupId }) => {
  const { errors, data, isLoading, updateData } = useData(api.details(groupId), [groupId]);

  const onVoteFor = (id) => {
    postsApi.vote(id, 'for')().then(({ data, errors }) => {
      if (errors) {
        throw (errors);
      }
      updateData(({ group }) => {
        return {
          group: {
            ...group,
            posts: group.posts.map(post => post.id === id ? data.post : post)
          }
        }
      })
    }).catch((e) => alert(e));
  }

  const onVoteAgainst = (id) => {
    postsApi.vote(id, 'against')().then(({ data, errors }) => {
      if (errors) {
        throw errors;
      }
      updateData(({ group }) => {
        return {
          group: {
            ...group,
            posts: group.posts.map(post => post.id === id ? data.post : post)
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
      <Page.Header>{data.group.name}</Page.Header>
      <Page.Body>
        {data.group.posts.map(post => (
          <Post key={post.id} {...post} onVoteAgainst={() => onVoteAgainst(post.id)} onVoteFor={() => onVoteFor(post.id)} />
        ))}
        {data.group.posts.length === 0 ? <Post.Empty /> : null}
        {data.group.pages && <Pagination {...data.group.pages} />}
      </Page.Body>
    </Page>
  );
};
