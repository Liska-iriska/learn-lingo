import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthControls from "../AuthControls/AuthControls";
import css from "./Header.module.css";

function Header() {
  const { user } = useAuth();
  return (
    <header className={`${css.header} ${css.container}`}>
      <Link to="/" className={css.logo}>
        <svg width={28} height={28} aria-hidden="true">
          <use href="/sprite.svg#icon-ukraine" />
        </svg>
        <p className={css.logot}>LearnLingo</p>
      </Link>

      <nav className={css.nav}>
        <NavLink to="/" className={css.navItem}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.navItem}>
          Teachers
        </NavLink>
        {user && (
          <NavLink to="/favorites" className={css.navItem}>
            Favorites
          </NavLink>
        )}
      </nav>

      <AuthControls />
    </header>
  );
}

export default Header;
