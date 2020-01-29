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
import { useData } from "../hooks/useData";

export const GroupEdit = ({ groupId }) => {
  const { errors: groupErrors, data, isLoading } = useData(
    api.details(groupId)
  );
  const app = useApp();
  const { errors, onSubmit, submitting, setErrors, input } = useForm({
    onSubmit: values =>
      api
        .edit(groupId, values)()
        .then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
            return;
          }
          app.loading = true;
          app.updateGroups().then(() => {
            app.loading = false;
            return app.navigate(`/group-edit-success/${groupId}`);
          });
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

  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  if (isLoading) {
    return <Page.Loader />;
  }

  if (groupErrors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>Edytuj grupę</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Nazwa*</Field.Label>
            <Field.Input {...name} defaultValue={data.group.name} />
            {errors.name && <Field.Errors>{errors.name.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Tag*</Field.Label>
            <Field.Input {...tag} defaultValue={data.group.tag} />
            {errors.tag && <Field.Errors>{errors.tag.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Opis*</Field.Label>
            <Field.Input
              {...description}
              defaultValue={data.group.description}
              textArea
              rows="10"
            />
            {errors.description && (
              <Field.Errors>{errors.description.array}</Field.Errors>
            )}
          </Field>

          {!errors.empty && <Form.Errors>{errors.form && errors.form.array && errors.form.array[0]}</Form.Errors>}


          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
