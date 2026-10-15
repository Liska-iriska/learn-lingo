import TeacherCard from "../TeacherCard/TeacherCard";
import type { Teacher } from "../../types/teacher";
import css from "./TeachersList.module.css";

type Props = { teachers: Teacher[] };

export const TeachersList = ({ teachers = [] }: Props) => {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
};

export default TeachersList;
