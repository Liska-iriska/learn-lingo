import css from "./Info.module.css";

export const Info = () => {
  return (
    <section
      aria-label="Our statistics"
      className={css.info + " " + css.container}
    >
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.number}>32,000+</span>
          <span className={css.label}>Experienced tutors</span>
        </li>
        <li className={css.listItem}>
          <span className={css.number}>300,000+</span>
          <span className={css.label}>5-star tutor reviews</span>
        </li>
        <li className={css.listItem}>
          <span className={css.number}>120+</span>
          <span className={css.label}>Subjects taught</span>
        </li>
        <li className={css.listItem}>
          <span className={css.number}>200+</span>
          <span className={css.label}>Tutor nationalities</span>
        </li>
      </ul>
    </section>
  );
};
export default Info;
