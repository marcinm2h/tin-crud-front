import React from "react";
import { Page } from "../components/Page";
import { Link } from "../components/Link";
import { Form, Field } from "../components/Form";
import { useForm } from "../hooks/useForm";
import {
  validateRequired,
  validateLength,
  validateStringOrNumber
} from "../validators";
import { useApp } from "../App";
import * as api from "../api/auth";

export const Login = () => {
  const app = useApp();
  const { errors, onSubmit, submitting, setErrors, input } = useForm({
    onSubmit: values =>
      api
        .login(values)()
        .then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
            return;
          }
          return app.login(data);
        })
  });

  const login = input("login", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 3, maxLength: 20 }),
      validateStringOrNumber
    ]
  });

  const password = input("password", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 2 })
    ]
  });

  return (
    <Page>
      <Page.Header>Zaloguj się</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Login*</Field.Label>
            <Field.Input {...login} />
            {errors.login && <Field.Errors>{errors.login.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Login*</Field.Label>
            <Field.Input type="password" {...password} />
            {errors.password && (
              <Field.Errors>{errors.password.array}</Field.Errors>
            )}
          </Field>

          <Form.Info>
            <Link href="/register">Nie masz jeszcze konta? Kliknij tutaj.</Link>
          </Form.Info>

          {!errors.empty && <Form.Errors />}

          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
