import { errors } from "./errors";

export const validateString = value => {
  return /^[A-Za-z]+$/.test(value) ? null : errors.STRING();
};

