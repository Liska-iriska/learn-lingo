import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { useFavorites } from "../../hooks/useFavorites";
import { fetchTeachersByIds } from "../../services/teachers";
import type { Teacher } from "../../types/teacher";
import css from "../TeachersPage/TeachersPage.module.css";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(() => favoriteIds.length > 0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (favoriteIds.length === 0) {
      return;
    }

    let isCancelled = false;

    fetchTeachersByIds(favoriteIds)
      .then((data) => {
        if (!isCancelled) setTeachers(data);
      })
      .catch(() => {
        if (!isCancelled) setError("Failed to load teachers. Try again later");
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [favoriteIds]);

  const visibleTeachers = teachers.filter((teacher) =>
    favoriteIds.includes(teacher.id),
  );

  return (
    <main className={css.teachersPage}>
      <div className={css.container}>
        <h1 className={css.visuallyHidden}>Favorites</h1>

        {isLoading && <p className={css.status}>Loading...</p>}

        {error && (
          <p className={css.status} role="alert">
            {error}
          </p>
        )}

        {!isLoading && !error && visibleTeachers.length === 0 && (
          <p className={css.status}>
            You have no favorite teachers yet.{" "}
            <Link to="/teachers" className={css.statusLink}>
              Find a teacher
            </Link>
          </p>
        )}

        {visibleTeachers.length > 0 && (
          <ul className={css.list}>
            {visibleTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
