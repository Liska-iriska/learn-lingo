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
        <button className={css.btn}>Get Started</button>
      </div>

      <div>
        <img
          src="/hero/hero-yellow.webp"
          srcSet="/hero/hero-yellow.webp 1x, /hero/hero-yellow@2x.webp 2x"
          width={568}
          height={530}
          alt="Girl with the laptop"
        />
      </div>
    </section>
  );
};
export default Hero;
