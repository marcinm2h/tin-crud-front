import React from "react";
import { Page } from "../components/Page";
import { Form, Field } from "../components/Form";
import { useForm } from "../hooks/useForm";
import {
  validateRequired,
  validateLength,
  validateStringOrNumber,
  validateString
} from "../validators";
import { useApp } from "../App";
import * as api from "../api/groups";

export const GroupCreate = () => {
  const app = useApp();
  const { errors, onSubmit, submitting, setErrors, input } = useForm({
    onSubmit: values =>
      api
        .add(values)()
        .then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
            return;
          }
          app.groups = [...app.groups, data.group];
          return app.navigate(`/group-create-success/${data.group.id}`);
        })
  });
  const name = input("name", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 3, maxLength: 100 }),
      validateString
    ]
  });
  const tag = input("tag", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 3, maxLength: 50 }),
      validateStringOrNumber
    ]
  });
  const description = input("description", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 20, maxLength: 200 })
    ]
  });

  return (
    <Page>
      <Page.Header>Utwórz grupę</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Nazwa*</Field.Label>
            <Field.Input {...name} />
            {errors.name && <Field.Errors>{errors.name.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Tag*</Field.Label>
            <Field.Input {...tag} />
            {errors.tag && <Field.Errors>{errors.tag.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Opis*</Field.Label>
            <Field.Input {...description} textArea cols="10" />
            {errors.description && (
              <Field.Errors>{errors.description.array}</Field.Errors>
            )}
          </Field>

          {!errors.empty && <Form.Errors />}

          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
