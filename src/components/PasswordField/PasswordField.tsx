import { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import css from "./PasswordField.module.css";

interface PasswordFieldProps {
  registration: UseFormRegisterReturn;
  inputClassName: string;
  hasError: boolean;
  autoComplete: "current-password" | "new-password";
}

export default function PasswordField({
  registration,
  inputClassName,
  hasError,
  autoComplete,
}: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={css.wrap}>
      <input
        className={inputClassName}
        type={isVisible ? "text" : "password"}
        placeholder="Password"
        aria-label="Password"
        autoComplete={autoComplete}
        aria-invalid={hasError}
        {...registration}
      />
      <button
        type="button"
        className={css.toggle}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <svg width={20} height={20} aria-hidden="true">
          <use
            href={`/sprite.svg#${isVisible ? "icon-eye" : "icon-eye-off"}`}
          />
        </svg>
      </button>
    </div>
  );
}
