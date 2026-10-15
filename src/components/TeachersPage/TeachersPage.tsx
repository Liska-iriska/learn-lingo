import Filters from "../Filters/Filters";
import TeachersList from "../TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchTeachers } from "../../services/teachers";
import type { Teacher } from "../../types/teacher";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const lastKeyRef = useRef<string | undefined>(undefined);

  const load = useCallback(async () => {
    try {
      const data = await fetchTeachers(lastKeyRef.current);
      lastKeyRef.current = data.teachers.at(-1)?.id;
      setTeachers((prev) => {
        const ids = new Set(prev.map((t) => t.id));
        return [...prev, ...data.teachers.filter((t) => !ids.has(t.id))];
      });
      setHasMore(data.hasMore);
      setError("");
    } catch {
      setError("Failed to load teachers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleLoadMore = () => {
    setIsLoading(true);
    load();
  };

  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <Filters />
        <TeachersList teachers={teachers} />

        {error && <p>{error}</p>}

        {hasMore && (
          <button
            className={css.loadMoreBtn}
            type="button"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
};

export default TeachersPage;
