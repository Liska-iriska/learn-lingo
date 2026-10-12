import Filters from "../Filters/Filters";
import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <Filters />
      </div>
    </section>
  );
};

export default TeachersPage;
