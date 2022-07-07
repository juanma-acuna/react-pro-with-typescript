import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, handleReset, errors, touched, getFieldProps } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .required("First name is required")
          .max(15, "First name must be 15 characters or less"),
        lastName: Yup.string()
          .required("Last name is required")
          .max(10, "Last name must be 10 characters or less"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};
