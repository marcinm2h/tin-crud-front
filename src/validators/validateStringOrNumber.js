import { errors } from "./errors";

export const validateStringOrNumber = value => {
  return /^[A-Za-z|\d]+$/.test(value) ? null : errors.STRING_OR_NUMBER();
};
