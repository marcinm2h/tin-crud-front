import { request } from "./request";

const url = "/api/posts";

export const list = () => () => request.get(url);

export const details = id => () => request.get(`${url}/${id}`);

export const add = data => () => request.post(url, { data });

export const edit = (id, data) => () => request.put(`${url}/${id}`, { data });

export const remove = id => () => request.delete(`${url}/${id}`);

export const vote = (id, type) => () => request.post(`${url}/vote/${id}`, { data: { type } });
