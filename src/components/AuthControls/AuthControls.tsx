import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { logoutUser } from "../../services/auth";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import css from "./AuthControls.module.css";

type OpenModal = "login" | "register" | null;

export default function AuthControls() {
  const { user, isLoading } = useAuth();
  const [openModal, setOpenModal] = useState<OpenModal>(null);

  const closeModal = () => setOpenModal(null);

  if (isLoading) return null;

  return (
    <>
      {user ? (
        <div className={css.group}>
          <span className={css.name}>{user.displayName}</span>
          <button
            type="button"
            className={css.primary}
            onClick={() => logoutUser()}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className={css.group}>
          <button
            type="button"
            className={css.login}
            onClick={() => setOpenModal("login")}
          >
            <svg width={20} height={20} aria-hidden="true">
              <use href="/sprite.svg#icon-log-in" />
            </svg>
            Log in
          </button>
          <button
            type="button"
            className={css.primary}
            onClick={() => setOpenModal("register")}
          >
            Registration
          </button>
        </div>
      )}

      {openModal === "login" && <LoginModal onClose={closeModal} />}
      {openModal === "register" && <RegisterModal onClose={closeModal} />}
    </>
  );
}
