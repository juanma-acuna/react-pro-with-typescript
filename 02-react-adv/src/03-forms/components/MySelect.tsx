import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  options?: any[];
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  const { options, placeholder } = props;
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      {typeof options !== "undefined" ? (
        <select {...field} {...props}>
          {placeholder && <option value="">{placeholder}</option>}
          {options &&
            options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : (
        <select {...field} {...props} />
      )}
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
