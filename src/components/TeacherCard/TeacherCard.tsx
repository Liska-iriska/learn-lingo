import { useState } from "react";
import css from "./TeacherCard.module.css";
import type { Teacher } from "../../types/teacher";
import BookTrialModal from "../BookTrialModal/BookTrialModal";
import Modal from "../Modal/Modal";
import { useAuth } from "../../hooks/useAuth";
import { useFavorites } from "../../hooks/useFavorites";

type Props = { teacher: Teacher };

const REVIEWER_AVATARS = [
  "/reviewers/1.png",
  "/reviewers/2.png",
  "/reviewers/3.png",
  "/reviewers/4.png",
  "/reviewers/5.png",
  "/reviewers/6.png",
];
const TeacherCard = ({ teacher }: Props) => {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const fullName = `${name} ${surname}`;
  const favorite = isFavorite(id);

  const handleHeartClick = () => {
    if (!user) {
      setIsNoticeOpen(true);
      return;
    }
    toggleFavorite(id);
  };

  return (
    <li className={css.card}>
      <div className={css.avatar}>
        <span className={css.indicate} aria-hidden="true" />
        <img
          className={css.img}
          src={avatar_url}
          alt={fullName}
          width={96}
          height={96}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.name}>
            <span>Languages</span>
            <p>{fullName}</p>
          </div>

          <div className={css.about}>
            <div className={css.stat}>
              <svg
                width={16}
                height={16}
                fill="none"
                stroke="#121417"
                aria-hidden="true"
              >
                <use href="/sprite.svg#book-open" />
              </svg>
              <span>Lessons online</span>
            </div>
            <div className={css.stat}>
              <span>Lessons done: {lessons_done}</span>
            </div>
            <div className={css.stat}>
              <svg width={16} height={16} fill="#FFC531" stroke="#FFC531">
                <use href="/sprite.svg#star" />
              </svg>
              <span>Rating: {rating}</span>
            </div>
            <div className={css.stat}>
              <span>
                Price / 1 hour:{" "}
                <span className={css.price}>{price_per_hour}$</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            className={`${css.heart} ${favorite ? css.heartActive : ""}`}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={favorite}
            onClick={handleHeartClick}
          >
            <svg
              className={css.heartIcon}
              width={26}
              height={26}
              aria-hidden="true"
            >
              <use href="/sprite.svg#heart" />
            </svg>
          </button>
        </div>
        <ul className={css.info}>
          <li>
            <span className={css.label}>Speaks: </span>
            <span className={css.languages}>{languages.join(", ")}</span>
          </li>
          <li>
            <span className={css.label}>Lesson Info: </span>
            {lesson_info}
          </li>
          <li>
            <span className={css.label}>Conditions: </span>
            {conditions.join(" ")}
          </li>

          {!isExpanded && (
            <li>
              <button
                type="button"
                className={css.readMore}
                onClick={() => setIsExpanded(true)}
              >
                Read more
              </button>
            </li>
          )}
        </ul>
        {isExpanded && (
          <>
            <p className={css.description}>{experience}</p>

            <ul className={css.reviews}>
              {reviews.map((review, index) => (
                <li key={index} className={css.review}>
                  <div className={css.reviewer}>
                    <img
                      className={css.reviewerImg}
                      src={REVIEWER_AVATARS[index % REVIEWER_AVATARS.length]}
                      alt={review.reviewer_name}
                      width={44}
                      height={44}
                    />
                    <div className={css.reviewerInfo}>
                      <span className={css.label}>{review.reviewer_name}</span>
                      <div className={css.reviewRating}>
                        <svg
                          width={16}
                          height={16}
                          fill="#FFC531"
                          stroke="#FFC531"
                          aria-hidden="true"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <span>{review.reviewer_rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <ul className={css.levels}>
          {levels.map((level, index) => (
            <li
              key={level}
              className={`${css.level} ${index === 0 ? css.levelActive : ""}`}
            >
              {level}
            </li>
          ))}
        </ul>
        {isExpanded && (
          <button
            type="button"
            className={css.book}
            onClick={() => setIsBookingOpen(true)}
          >
            Book trial lesson
          </button>
        )}
      </div>

      {isBookingOpen && (
        <BookTrialModal
          teacher={teacher}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {isNoticeOpen && (
        <Modal
          onClose={() => setIsNoticeOpen(false)}
          labelledBy={`notice-${id}`}
        >
          <h2 className={css.noticeTitle} id={`notice-${id}`}>
            Authorization required
          </h2>
          <p className={css.noticeText}>
            This feature is available only to authorized users. Please log in or
            register to add teachers to your favorites.
          </p>
        </Modal>
      )}
    </li>
  );
};

export default TeacherCard;
