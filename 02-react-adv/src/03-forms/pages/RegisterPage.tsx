import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const initState = {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };

  const {
    name,
    email,
    password1,
    password2,
    formData,
    isValidEmail,
    resetForm,
    onChange,
  } = useForm(initState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length < 1 && "has-error"}`}
        />
        {name.trim().length < 1 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length < 1 && "has-error"}`}
        />
        {password1.trim().length < 1 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe ser de 6 caracteres o más</span>
        )}
        <input
          type="password"
          placeholder="Repeat"
          name="password2"
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length < 1 && "has-error"}`}
        />
        {password2.trim().length < 1 && <span>Este campo es necesario</span>}
        {password2.trim().length < 1 &&
          password1.trim() !== password2.trim() && (
            <span>La contraseña debe ser de 6 caracteres o más</span>
          )}
        <button type="submit">Register</button>
        <button onClick={() => resetForm()}>Reset</button>
      </form>
    </div>
  );
};
