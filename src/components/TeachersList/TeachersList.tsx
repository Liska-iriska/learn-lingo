import TeacherCard from "../TeacherCard/TeacherCard";

export const TeachersList = (({ teachers = [] })) => {
  return <ul>{teachers.map((teacher) => (
        <li key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}</ul>;
};

export default TeachersList;
