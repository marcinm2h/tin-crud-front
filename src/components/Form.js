import React, { useState, Fragment } from "react";

const uuid = () => `field-${Math.random()}`;

export const Form = ({ submitting, children, ...props }) => (
  <div className="loader">
    {submitting && <div className="form__spinner loader__spinner"></div>}
    <form className={`form ${submitting ? "form--submitting" : ""}`} {...props}>
      <fieldset disabled={submitting}>{children}</fieldset>
    </form>
  </div>
);

Form.Errors = props => (
  <div className="form__error">
    Wystąpiły błędy formularza. Aby kontynuować dodawanie postu popraw błędne
    pola.
  </div>
);

Form.Info = props => <div className="form__info" {...props} />;

Form.Submit = ({ children = "Wyślij" }) => (
  <button className="form__submit button" type="submit">
    {children}
  </button>
);

export const Field = ({ children, ...props }) => {
  const [id] = useState(() => uuid());

  return (
    <div className="form__field field" {...props}>
      {React.Children.map(children, child => {
        if (
          !child ||
          !child.type ||
          ![Field.Label.componentName, Field.Input.componentName].includes(
            child.type.componentName
          )
        ) {
          return child;
        }
        const newProps = {
          [Field.Label.componentName]: {
            htmlFor: id
          },
          [Field.Input.componentName]: {
            id
          }
        }[child.type.componentName];
        return React.cloneElement(child, newProps);
      })}
    </div>
  );
};

Field.Label = ({ ...props }) => <label className="field__label" {...props} />;

Field.Label.componentName = Symbol("Field.Label");

Field.Input = React.forwardRef((props, ref) => (
  <input className="field__input" ref={ref} {...props} />
));

Field.Input.componentName = Symbol("Field.Input");

Field.Error = ({ children: error, ...props }) => (
  <div {...props}>{error && <div className="field__error">{error}</div>}</div>
);

Field.Errors = ({ children: errors }) => (
  <Fragment>
    {errors.map((error, idx) => (
      <Field.Error key={idx}>{error}</Field.Error>
    ))}
  </Fragment>
);

Field.Error.componentName = Symbol("Field.Error");
