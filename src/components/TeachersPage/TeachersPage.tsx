import Filters from "../Filters/Filters";
import TeachersList from "../TeachersList/TeachersList";
import css from "./TeachersPage.module.css";
import { useEffect, useState } from "react";
import { fetchAllTeachers } from "../../services/teachers";
import type { Teacher } from "../../types/teacher";

const PER_PAGE = 4;

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [language, setLanguage] = useState("All");
  const [level, setLevel] = useState("All");
  const [price, setPrice] = useState("-");

  useEffect(() => {
    fetchAllTeachers()
      .then((data) => {
        setTeachers(data);
      })
      .catch(() => {
        setError("Failed to load teachers. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleLanguageChange = (val: string) => {
    setLanguage(val);
    setVisibleCount(PER_PAGE);
  };

  const handleLevelChange = (val: string) => {
    setLevel(val);
    setVisibleCount(PER_PAGE);
  };

  const handlePriceChange = (val: string) => {
    setPrice(val);
    setVisibleCount(PER_PAGE);
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLanguage =
      language === "All" ? true : teacher.languages.includes(language);

    const matchesLevel =
      level === "All" ? true : teacher.levels.includes(level);

    const matchesPrice =
      price === "-" ? true : teacher.price_per_hour <= Number(price);

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTeachers.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PER_PAGE);
  };

  return (
    <section className={css.teachersPage}>
      <div className={css.container}>
        <Filters
          language={language}
          setLanguage={handleLanguageChange}
          level={level}
          setLevel={handleLevelChange}
          price={price}
          setPrice={handlePriceChange}
        />

        {isLoading && <p className={css.status}>Loading...</p>}

        {!isLoading && (
          <TeachersList teachers={visibleTeachers} selectedLevel={level} />
        )}

        {error && <p>{error}</p>}

        {!isLoading && filteredTeachers.length === 0 && !error && (
          <p className={css.status}>
            No teachers found for the selected filters.
          </p>
        )}

        {hasMore && filteredTeachers.length > 0 && (
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
