import Filters from "../Filters/Filters";
import TeacherCard from "../TeacherCard/TeacherCard";
import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <Filters />
        <TeacherCard />
      </div>
    </section>
  );
};

export default TeachersPage;
