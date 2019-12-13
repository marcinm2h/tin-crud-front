import { useEffect, useState, useRef } from "react";

export const useData = (api, deps = []) => {
  const exists = useRef(true);
  exists.current = true;
  const [{ errors, data, isLoading = true }, setState] = useState({});
  const update = slice => {
    if (exists.current) {
      setState(state => ({ ...state, ...slice }));
    }
  };

  useEffect(() => {
    update({ isLoading: true });

    (Array.isArray(api)
      ? Promise.all(api.map(endpoint => endpoint())).then(responses =>
          responses.reduce((acc, { data }) => [...acc, data], [])
        )
      : api().then(({ data }) => data)
    )
      .then(data => update({ isLoading: false, data }))
      .catch(errors => update({ isLoading: false, errors }));

    return () => {
      setState({});
      exists.current = false;
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { errors, data, isLoading };
};
