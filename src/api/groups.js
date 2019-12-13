import { request } from "./request";

const url = "/api/groups";

export const list = () => () => request.get(`${url}`);

export const details = id => () => request.get(`${url}/${id}`);

export const add = data => () => request.post(url, { data });
