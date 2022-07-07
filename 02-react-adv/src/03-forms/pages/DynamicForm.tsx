import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const field of formJson) {
  initialValues[field.name] = field.value;
  if (!field.validations) continue;
  let schema = Yup.string();
  for (const rule of field.validations) {
    if (rule.type === "required" && field.type !== "checkbox") {
      schema = schema.required(`El campo ${field.label} es requerido`);
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Este campo debe tener por lo menos ${
          (rule as any).value | 2
        } caracteres`
      );
    }
    if (rule.type === "maxLength") {
      schema = schema.max(
        (rule as any).value || 15,
        `Este campo debe tener como máximo ${
          (rule as any).value | 15
        } caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Este campo debe ser un email válido");
    }
  }
  requiredFields[field.name] = schema;
}

for (const field of formJson) {
  for (const rule of field.validations) {
    if (rule.type === "required" && field.type === "checkbox") {
      requiredFields[field.name] = Yup.boolean().oneOf(
        [true],
        `El campo ${field.label} es requerido`
      );
    }
  }
}

let passwordCount = 0;
for (const field of formJson) {
  if (field.type === "password") passwordCount++;
}
if (passwordCount === 2) {
  requiredFields["password2"] = requiredFields["password2"].oneOf(
    [Yup.ref("password1")],
    "Las contraseñas deben coincidir"
  );
}

const validationSchema = Yup.object(requiredFields);

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik: any) => (
          <Form noValidate>
            {formJson.map((field: any) => {
              switch (field.type) {
                case "text":
                case "email":
                case "password":
                  return (
                    <MyTextInput
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  );
                case "select":
                  return (
                    <MySelect
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      options={field.options}
                    />
                  );
                case "checkbox":
                  return (
                    <MyCheckbox
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  );
                default:
                  return null;
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
