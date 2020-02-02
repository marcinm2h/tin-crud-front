import React from "react";
import { Page } from "../components/Page";
import { Form, Field } from "../components/Form";
import { useForm } from "../hooks/useForm";
import { validateRequired, validateLength, validateUrl } from "../validators";
import { useApp } from "../App";
import * as api from "../api/posts";
import { useData } from "../hooks/useData";

export const PostEdit = ({ postId }) => {
  const { errors: postErrors, data, isLoading } = useData(
    api.details(postId)
  );
  const app = useApp();
  const { errors, onSubmit, submitting, setErrors, input } = useForm({
    onSubmit: values =>
      api
        .edit(postId, values)()
        .then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
            return;
          }
          return app.navigate(`/post-edit-success/${postId}`);
        })
  });
  const url = input("url", {
    validators: [
      validateRequired,
      validateUrl,
      value => validateLength(value, { minLength: 4, maxLength: 256 })
    ]
  });
  const description = input("description", {
    validators: [
      validateRequired,
      value => validateLength(value, { minLength: 8, maxLength: 200 })
    ]
  });
  const groupId = input("groupId", {
    validators: [validateRequired]
  });

  if (!app.loggedIn) {
    return <Page.Unauthenticated />;
  }

  if (isLoading) {
    return <Page.Loader />;
  }

  if (postErrors) {
    return <Page.Errors>{errors}</Page.Errors>;
  }

  return (
    <Page>
      <Page.Header>Edytuj post</Page.Header>
      <Page.Body>
        <Form onSubmit={onSubmit} submitting={submitting}>
          <Field>
            <Field.Label>Link*</Field.Label>
            <Field.Input {...url} defaultValue={data.post.url} />
            {errors.url && <Field.Errors>{errors.url.array}</Field.Errors>}
          </Field>

          <Field>
            <Field.Label>Opis*</Field.Label>
            <Field.Input textArea rows="10" {...description} defaultValue={data.post.description} />
            {errors.description && (
              <Field.Errors>{errors.description.array}</Field.Errors>
            )}
          </Field>

          {process.env.FEATURE_CHANGE_POST_GROUP && <Field>
            <Field.Label>Grupa*</Field.Label>
            <select {...groupId} defaultValue={data.post.group.id}>
              {app.groups.map(group => (
                <option value={group.id} key={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </Field>}

          {!errors.empty && <Form.Errors>{errors.form && errors.form.array && errors.form.array[0]}</Form.Errors>}


          <Form.Submit />
        </Form>
      </Page.Body>
    </Page>
  );
};
