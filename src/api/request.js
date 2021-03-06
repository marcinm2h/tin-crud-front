import axios from "axios";

const DELAY = process.env.NODE_ENV === "development" ? 300 : 0;

export const delay = (data, t = DELAY) =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), t);
  });

const requestFactory = method => (url, data) =>
  axios[method](url, data)
    .then(({ data }) => data)
    .then(delay, e => delay().then(() => Promise.reject(e)));

export const request = {
  get: requestFactory("get"),
  post: requestFactory("post"),
  put: requestFactory("put"),
  delete: requestFactory("delete")
};
