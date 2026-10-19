import type { ReactNode } from "react";
import Modal from "../Modal/Modal";
import css from "./AuthModal.module.css";

interface AuthModalProps {
  id: string;
  title: string;
  text: string;
  onClose: () => void;
  children: ReactNode;
}

export default function AuthModal({
  id,
  title,
  text,
  onClose,
  children,
}: AuthModalProps) {
  return (
    <Modal onClose={onClose} labelledBy={id}>
      <h2 className={css.title} id={id}>
        {title}
      </h2>
      <p className={css.text}>{text}</p>
      {children}
    </Modal>
  );
}
