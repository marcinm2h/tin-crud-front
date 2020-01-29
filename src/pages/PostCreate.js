import React from "react";
import { Page } from "../components/Page";
import { Form, Field } from "../components/Form";
import { useForm } from "../hooks/useForm";
import { validateRequired, validateLength, validateUrl } from "../validators";
import { useApp } from "../App";
import * as api from "../api/posts";

export const PostCreate = () => {
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
          return app.navigate(`/post/${data.post.id}`);
        })
  });
  const url = input("url", {
    validators: [
      validateRequired,
      validateUrl,
      value => validateLength(value, { minLength: 4, maxLength: 50 })
    ]
  });
  const description = input("description", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 20, maxLength: 200 })
    ]
  });
  const groupId = input("groupId", {
    validators: [validateRequired]
  });

  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  return (
    <Page>
      <Page.Header>Dodaj post</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Link*</Field.Label>
            <Field.Input {...url} />
            {errors.url && <Field.Errors>{errors.url.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Opis*</Field.Label>
            <Field.Input textArea rows="10" {...description} />
            {errors.description && (
              <Field.Errors>{errors.description.array}</Field.Errors>
            )}
          </Field>

          <Field>
            <Field.Label>Grupa*</Field.Label>
            <select {...groupId}>
              {app.groups.map(group => (
                <option value={group.id} key={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </Field>

          {!errors.empty && <Form.Errors>{errors.form && errors.form.array && errors.form.array[0]}</Form.Errors>}


          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
