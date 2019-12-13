import React from "react";
import { Page } from "../components/Page";
import { Link } from "../components/Link";
import { Form, Field } from "../components/Form";
import { useForm } from '../hooks/useForm';

export const Login = () => {
  const { errors, onSubmit, input } = useForm({
    onSubmit: values => console.log("submit", { values })
  });
  const login = input("login", {
    validators: [
      value => {
        if (value === "test") {
          return null;
        }
        return "błąd";
      }
    ]
  });
  const password = input("password");

  return (
    <Page>
      <Page.Header>Zaloguj się</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit}>
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