import React from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/home";
import * as postsApi from "../api/posts";
import { useData } from "../hooks/useData";

export const Home = () => {
  const { errors, data, isLoading, updateData } = useData(api.home());

  const onVoteFor = (id) => {
    postsApi.vote(id, 'for')().then(({ data, errors }) => {
      if (errors) {
        throw (errors);
      }
      updateData(({ posts }) => {
        return {
          posts: posts.map(post => post.id === id ? data.post : post)
        }
      })
    }).catch((e) => alert(e));
  }

  const onVoteAgainst = (id) => {
    postsApi.vote(id, 'against')().then(({ data, errors }) => {
      if (errors) {
        throw errors;
      }
      updateData(({ posts }) => {
        return {
          posts: posts.map(post => post.id === id ? data.post : post)
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
      <Page.Header>Strona główna</Page.Header>
      <Page.Body>
        {data.posts.map(post => (
          <Post key={post.id}
            {...post} onVoteFor={() => onVoteFor(post.id)} onVoteAgainst={() => onVoteAgainst(post.id)} />
        ))}
        {data.posts.length === 0 ? <Post.Empty /> : null}
        {data.pages && <Pagination {...data.pages} />}
      </Page.Body>
    </Page>
  );
};
