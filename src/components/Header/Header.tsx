import { Link } from "react-router-dom";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header + " " + css.container}>
      <Link to="/" className={css.logo}>
        <svg width={28} height={28}>
          <use href="/sprite.svg#icon-ukraine" />
        </svg>
        <p className={css.logot}>LearnLingo</p>
      </Link>

      <nav className={css.nav}>
        <Link to="/" className={css.navItem}>
          Home
        </Link>
        <Link to="/teachers" className={css.navItem}>
          Teachers
        </Link>
      </nav>
      <div className={css.auth}>
        <Link to="/login" className={css.logIn}>
          <svg width={20} height={20} className={css.icon}>
            <use href="/sprite.svg#log-in" />
          </svg>
          <p className={css.authText}>Log in</p>
        </Link>
        <Link to="/register" className={css.authBtn}>
          Registration
        </Link>
      </div>
    </header>
  );
}

export default Header;
