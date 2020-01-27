import { request } from "./request";

const url = "/api/users";

export const details = id => () => request.get(`${url}/${id}`);

export const add = (data) => () => request.post(url, {
  data: {
    ...data,
    gender: data.gender === 'male' //FIXME: parser
  }
})