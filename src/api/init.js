import { request } from "./request";

const url = "/api/init";

export const init = state => () =>
  state ? Promise.resolve(state) : request.get(url);
