const { errors } = require('./errors');

export const validateBoolean = value => {
  if (typeof value !== 'boolean') {
    return errors.INVALID_DATA_TYPE();
  }

  return null;
};
