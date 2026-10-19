import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthModal from "../AuthModal/AuthModal";
import PasswordField from "../PasswordField/PasswordField";
import { getAuthErrorMessage, registerUser } from "../../services/auth";
import css from "../AuthModal/AuthModal.module.css";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name is too short")
    .required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async ({ name, email, password }: FormValues) => {
    setServerError("");
    try {
      await registerUser(name, email, password);
      onClose();
    } catch (error) {
      setServerError(getAuthErrorMessage(error));
    }
  };

  return (
    <AuthModal
      id="register-title"
      title="Registration"
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      onClose={onClose}
    >
      <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={css.field}>
          <input
            className={css.input}
            type="text"
            placeholder="Name"
            aria-label="Name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p className={css.error} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={css.field}>
          <input
            className={css.input}
            type="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className={css.error} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={css.field}>
          <PasswordField
            registration={register("password")}
            inputClassName={`${css.input} ${css.inputPassword}`}
            hasError={Boolean(errors.password)}
            autoComplete="new-password"
          />
          {errors.password && (
            <p className={css.error} role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        {serverError && (
          <p className={css.error} role="alert">
            {serverError}
          </p>
        )}

        <button type="submit" className={css.submit} disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </AuthModal>
  );
}
