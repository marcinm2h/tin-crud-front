import { request } from "./request";

const url = "/api/home";

export const home = () => () => request.get(url);
