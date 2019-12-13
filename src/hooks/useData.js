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
    api()
      .then(({ data }) => setState({ isLoading: false, data }))
      .catch(errors => setState({ isLoading: false, errors }));

    return () => {
      exists.current = false;
    };
  }, []);

  return { errors, data, isLoading };
};
