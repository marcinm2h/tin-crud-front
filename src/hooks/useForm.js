import useFormHook from "react-hook-form";
import { useState } from "react";

const __SKIP_VALIDATION__ =
  process.env.REACT_APP_SKIP_VALIDATION &&
  JSON.parse(process.env.REACT_APP_SKIP_VALIDATION);

export const useForm = ({ mode = "onBlur", onSubmit, ...rest } = {}) => {
  const [submitting, setSubmitting] = useState(false);
  const { errors, handleSubmit, ...form } = useFormHook({
    mode
  });
  const register = ({ validators, ...rest }) =>
    form.register({
      validate: value => {
        if (__SKIP_VALIDATION__) {
          return null;
        }
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
    submitting,
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
    onSubmit: e => {
      setSubmitting(true);
      handleSubmit(onSubmit)(e)
        .then(data => {
          setSubmitting(false);
        })
        .catch(e => {
          // setFormErrors(e);
        });
    },
    register,
    input: (name, { validators } = {}) => ({
      name,
      ref: register({ validators })
    })
  };
};
