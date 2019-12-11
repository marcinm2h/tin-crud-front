import axios from "axios";

const url = "/api/posts";

export const starWars = () => () => axios.get('https://swapi.co/api/people');

export const list = () => () => axios.get(url);

export const details = id => () => axios.get(`${url}${id}`);

export const add = data => () => axios.post(url, data);

export const edit = (id, data) => () => axios.put(`${url}${id}`, data);

export const remove = id => () => axios.delete(`${url}${id}`);
