import React from "react";
import { Page } from "../components/Page";
import { Form, Field } from "../components/Form";
import { useForm } from "../hooks/useForm";
import {
  validateRequired,
  validateLength,
  validateStringOrNumber,
  validateEmail,
  validateString
} from "../validators";
import { useApp } from "../App";
import * as api from "../api/users";

export const Register = () => {
  const app = useApp();
  const { errors, onSubmit, submitting, setErrors, input, select } = useForm({
    onSubmit: values =>
      api
        .add(values)()
        .then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
            return;
          }
          return app.navigate('/register-success');
        })
  });

  const login = input("login", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 3, maxLength: 20 }),
      validateStringOrNumber
    ]
  });

  const name = input("name", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 3, maxLength: 20 }),
      validateString
    ]
  });

  const mail = input("mail", {
    validators: [
      validateRequired,
      validateEmail
    ]
  });

  const password = input("password", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 2 })
    ]
  });

  const passwordConfirm = input("passwordConfirm", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 2 })
    ]
  });

  const gender = select('gender', {
    fields: [['male', 'Męczyzna'], ['female', 'Kobieta']]
  });

  return (
    <Page>
      <Page.Header>Zarejestruj się</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Login*</Field.Label>
            <Field.Input {...login} />
            {errors.login && <Field.Errors>{errors.login.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Email*</Field.Label>
            <Field.Input {...mail} />
            {errors.mail && <Field.Errors>{errors.mail.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Hasło*</Field.Label>
            <Field.Input {...password} type="password" />
            {errors.password && <Field.Errors>{errors.password.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Powtórz hasło*</Field.Label>
            <Field.Input {...passwordConfirm} type="password" />
            {errors.passwordConfirm && <Field.Errors>{errors.passwordConfirm.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Imię*</Field.Label>
            <Field.Input {...name} />
            {errors.name && <Field.Errors>{errors.name.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Płeć*</Field.Label>
            <select name={gender.name} ref={gender.ref}>
              {gender.fields.map((props => (
                <option value={props.value} key={props.value}>
                  {props.displayName}
                </option>
              )))}
            </select>
          </Field>

          {!errors.empty && <Form.Errors />}

          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
