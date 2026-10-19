import { Link } from "react-router-dom";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={css.hero + " " + css.container}>
      <div className={css.firstHalf}>
        <h1 className={css.title}>
          Unlock your potential with the best&nbsp;
          <span className={css.highlight}>language</span>
          &nbsp;tutors
        </h1>

        <p className={css.subtitle}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>

        <Link to="/teachers" className={css.btn}>
          Get Started
        </Link>
      </div>

      <div className={css.img}></div>
    </section>
  );
};
export default Hero;
