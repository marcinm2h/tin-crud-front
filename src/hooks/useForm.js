import useFormHook from "react-hook-form";

export const useForm = ({ mode = "onBlur", onSubmit, ...rest } = {}) => {
  const { errors, handleSubmit, ...form } = useFormHook({
    mode
  });
  const register = ({ validators, ...rest }) =>
    form.register({
      validate: value => {
        if (!validators || validators.length === 0) {
          return null;
        }
        const errors = validators
          .map(validator => validator(value))
          .filter(Boolean);
        if (errors && errors.length) {
          return JSON.stringify(errors);
        }
        return null;
      },
      ...rest
    });

  return {
    errors: {
      ...Object.entries(errors).reduce(
        (acc, [name, error]) => ({
          ...acc,
          [name]: {
            ...error,
            array: error.message && JSON.parse(error.message)
          }
        }),
        {}
      ),
      empty: Object.keys(errors).length === 0
    },
    onSubmit: handleSubmit(onSubmit),
    register,
    input: (name, { validators } = {}) => ({
      name,
      ref: register({ validators })
    })
  };
};
