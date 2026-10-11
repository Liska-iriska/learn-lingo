import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header + " " + css.container}>
      <div className={css.logo}>
        <svg width={28} height={28}>
          <use href="/sprite.svg#icon-ukraine" />
        </svg>
        <p className={css.logot}>LearnLingo</p>
      </div>
      <nav className={css.nav}>
        <p className={css.navItem}>Home</p>
        <p className={css.navItem}>Teachers</p>
      </nav>
      <div className={css.auth}>
        <div className={css.logIn}>
          <svg width={20} height={20} className={css.icon}>
            <use href="/sprite.svg#log-in" />
          </svg>
          <p className={css.authText}>Log in</p>
        </div>
        <button className={css.authBtn}>Registration</button>
      </div>
    </header>
  );
}

export default Header;
