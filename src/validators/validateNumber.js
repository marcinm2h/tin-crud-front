import { errors } from "./errors";

export const validateNumber = value => {
  return /^\d+$/.test(value) ? null : errors.NUMBER();
};

