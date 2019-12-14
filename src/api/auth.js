import { request } from "./request";

export const login = (data, { asAdmin = false } = {}) => () =>
  asAdmin
    ? request.post("/api/login-admin", { data })
    : request.post("/api/login", { data });

export const logout = () => () => request.post("/api/logout");
