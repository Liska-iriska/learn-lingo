import TeacherCard from "../TeacherCard/TeacherCard";
import type { Teacher } from "../../types/teacher";
import css from "./TeachersList.module.css";

type Props = {
  teachers: Teacher[];
  selectedLevel?: string;
};

export const TeachersList = ({ teachers = [], selectedLevel }: Props) => {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
          selectedLevel={selectedLevel}
        />
      ))}
    </ul>
  );
};

export default TeachersList;
