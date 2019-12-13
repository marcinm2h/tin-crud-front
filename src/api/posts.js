import { request } from "./request";

const url = "/api/posts";

export const starWars = () => () => request.get("https://swapi.co/api/people");

export const list = () => () => request.get(url);

export const details = id => () => request.get(`${url}/${id}`);

export const add = data => () => request.post(url, data);

export const edit = (id, data) => () => request.put(`${url}/${id}`, data);

export const remove = id => () => request.delete(`${url}.${id}`);
