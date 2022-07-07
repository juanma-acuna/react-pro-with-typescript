import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters")
            .max(15, "Name must be 15 characters or less"),
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
          password1: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
          password2: Yup.string()
            .required("Password is required")
            .min(6, "Password confirmation must be at least 6 characters")
            .oneOf([Yup.ref("password1")], "Passwords must match"),
        })}
      >
        {(formik: any) => (
          <Form>
            <MyTextInput label="Name" name="name" />
            <br />
            <MyTextInput label="Email" name="email" type="email" />
            <br />
            <MyTextInput label="Password" name="password1" type="password" />
            <br />
            <MyTextInput
              label="Password confirmation"
              name="password2"
              type="password"
            />
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
