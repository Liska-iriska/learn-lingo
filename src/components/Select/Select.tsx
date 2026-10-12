import { useEffect, useRef, useState } from "react";
import css from "./Select.module.css";

interface SelectProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  formatValue?: (value: string) => string;
}

export default function Select({
  id,
  label,
  options,
  value,
  onChange,
  formatValue,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const display = (v: string) => (formatValue ? formatValue(v) : v);

  return (
    <div className={css.field} ref={rootRef}>
      <span className={css.label} id={`${id}-label`}>
        {label}
      </span>

      <button
        type="button"
        className={css.trigger}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label ${id}`}
        id={id}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={css.valueWrap}>
          <span className={css.value}>{display(value)}</span>
          {options.map((option) => (
            <span key={option} className={css.sizer} aria-hidden="true">
              {display(option)}
            </span>
          ))}
        </span>
        <svg
          className={`${css.chevron} ${isOpen ? css.chevronOpen : ""}`}
          width={20}
          height={20}
        >
          <use href="/sprite.svg#icon-chevron-down" />
        </svg>
      </button>

      {isOpen && (
        <ul className={css.list} role="listbox" aria-labelledby={`${id}-label`}>
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={option === value}
              className={`${css.option} ${option === value ? css.optionActive : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
