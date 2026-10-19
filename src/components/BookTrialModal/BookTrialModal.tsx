import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Modal from "../Modal/Modal";
import css from "./BookTrialModal.module.css";

const reasons = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

const phoneRegex = /^\+?[0-9\s\-()]{10,16}$/;

const schema = yup.object({
  reason: yup.string().required("Choose a reason"),
  fullName: yup
    .string()
    .trim()
    .min(2, "Name is too short")
    .required("Full name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .matches(phoneRegex, "Enter a valid phone number")
    .required("Phone number is required"),
});

type FormValues = yup.InferType<typeof schema>;

interface BookTrialModalProps {
  teacher: {
    name: string;
    surname: string;
    avatar_url: string;
  };
  onClose: () => void;
}

export default function BookTrialModal({
  teacher,
  onClose,
}: BookTrialModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      reason: reasons[0],
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    iziToast.success({
      title: "Success",
      message: `Trial lesson with ${teacher.name} ${teacher.surname} successfully booked!`,
      position: "topRight",
      timeout: 3000,
    });
    reset();
    onClose();
  };

  return (
    <Modal onClose={onClose} labelledBy="book-trial-title">
      <h2 className={css.title} id="book-trial-title">
        Book trial lesson
      </h2>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.teacher}>
        <img
          className={css.avatar}
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          width={44}
          height={44}
        />
        <div>
          <p className={css.teacherLabel}>Your teacher</p>
          <p className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>
            What is your main reason for learning English?
          </legend>
          <div className={css.radios}>
            {reasons.map((reason) => (
              <label key={reason} className={css.radio}>
                <input type="radio" value={reason} {...register("reason")} />
                <span>{reason}</span>
              </label>
            ))}
          </div>
          {errors.reason && (
            <p className={css.error} role="alert">
              {errors.reason.message}
            </p>
          )}
        </fieldset>

        <div className={css.fields}>
          <div className={css.field}>
            <input
              className={css.input}
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className={css.error} role="alert">
                {errors.fullName.message}
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
            <input
              className={css.input}
              type="tel"
              placeholder="Phone number"
              aria-label="Phone number"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
            {errors.phone && (
              <p className={css.error} role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className={css.submit}>
          Book
        </button>
      </form>
    </Modal>
  );
}
