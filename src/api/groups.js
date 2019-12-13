import { request } from "./request";

const url = "/api/groups";

export const details = id => () => request.get(`${url}/${id}`);
