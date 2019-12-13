import { request } from "./request";

export const login = data => () => request.post("/api/login", { data });

export const logout = () => () => request.post("/api/logout");