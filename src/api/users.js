import { request } from "./request";

const url = "/api/users";

export const details = id => () => request.get(`${url}/${id}`);
