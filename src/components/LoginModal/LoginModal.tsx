import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthModal from "../AuthModal/AuthModal";
import PasswordField from "../PasswordField/PasswordField";
import { getAuthErrorMessage, loginUser } from "../../services/auth";
import css from "../AuthModal/AuthModal.module.css";

const schema = yup.object({
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

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async ({ email, password }: FormValues) => {
    setServerError("");
    try {
      await loginUser(email, password);
      onClose();
    } catch (error) {
      setServerError(getAuthErrorMessage(error));
    }
  };

  return (
    <AuthModal
      id="login-title"
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
      onClose={onClose}
    >
      <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
            autoComplete="current-password"
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
          Log In
        </button>
      </form>
    </AuthModal>
  );
}
