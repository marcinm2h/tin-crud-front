import React, { useEffect, useState, useRef } from "react";
import { Page } from "../components/Page";
import { Post } from "../components/Post";
import { Pagination } from "../components/Pagination";
import * as api from "../api/posts";

const useApi = api => {
  const exists = useRef(true);
  const [{ errors, data, isLoading = true }, set] = useState({});
  const setState = slice => {
    if (exists.current) {
      set(state => ({ ...state, ...slice }));
    }
  };

  useEffect(() => {
    setState({ isLoading: true });
    api()
      .then(data => setState({ isLoading: false, data }))
      .catch(errors => setState({ isLoading: false, errors }));

    return () => {
      exists.current = false;
    };
  }, []);

  return { errors, data, isLoading };
};

export const Group = () => {
  const { errors, data = Group.defaultData, isLoading } = useApi(
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
        {/* <Pagination /> */}
      </Page.Body>
    </Page>
  );
};
