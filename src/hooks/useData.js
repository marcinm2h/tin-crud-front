import { useEffect, useState, useRef } from "react";

export const useData = api => {
  const exists = useRef(true);
  const [{ errors, data, isLoading = true }, set] = useState({});
  const setState = slice => {
    if (exists.current) {
      set(state => ({ ...state, ...slice }));
    }
  };

  useEffect(() => {
    setState({ isLoading: true });

    (Array.isArray(api)
      ? Promise.all(api.map(endpoint => endpoint())).then(responses =>
          responses.reduce((acc, { data }) => [...acc, data], [])
        )
      : api().then(({ data }) => data)
    )
      .then(data => setState({ isLoading: false, data }))
      .catch(errors => setState({ isLoading: false, errors }));

    return () => {
      exists.current = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { errors, data, isLoading };
};
