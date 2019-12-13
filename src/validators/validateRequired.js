import { errors } from "./errors";

export const validateRequired = value => {
  if (value === null || value === undefined || value === '') {
    return errors.REQUIRED();
  }

  return null;
};
