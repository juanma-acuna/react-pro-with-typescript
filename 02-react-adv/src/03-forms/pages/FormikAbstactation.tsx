import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstactation = () => {
  return (
    <div>
      <h1>Formik Abtractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          jobType: "",
          jobTypeOther: "",
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First name is required")
            .max(15, "First name must be 15 characters or less"),
          lastName: Yup.string()
            .required("Last name is required")
            .max(10, "Last name must be 10 characters or less"),
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
          jobType: Yup.string()
            .required("Job type is required")
            .notOneOf(["it-jr"], "This option is not allowed now"),
          jobTypeOther: Yup.string()
            .required("Job type is required")
            .notOneOf(["it-jr"], "This option is not allowed now"),
          terms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
        })}
      >
        {(formik: any) => (
          <Form>
            <MyTextInput label="First name" name="firstName" />

            <MyTextInput label="Last name" name="lastName" />

            <MyTextInput label="Email" name="email" type="email" />

            <MySelect
              label="Job type"
              name="jobType"
              placeholder="Select your job type"
              options={[
                { value: "it-jr", label: "IT Junior" },
                { value: "it-sr", label: "IT Senior" },
                { value: "it-lead", label: "IT Lead" },
              ]}
            />

            <MySelect
              label="Job type (other)"
              name="jobTypeOther"
              placeholder="Select your (other) job type"
            >
              <option key="Pick_something">Pick something</option>
              <option key="developer" value="developer">
                Developer
              </option>
              <option key="designer" value="designer">
                Designer
              </option>
              <option key="it-senior" value="it-senior">
                IT Senior
              </option>
              <option key="it-jr" value="it-jr">
                IT Jr
              </option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
