import axios from "axios";

const requestFactory = method => (url, data) => axios[method](url, data);

export const request = {
  get: requestFactory("get"),
  post: requestFactory("post"),
  put: requestFactory("put"),
  delete: requestFactory("delete")
};
