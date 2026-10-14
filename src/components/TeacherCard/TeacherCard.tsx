// import css from "./TeacherCard.module.css";

// export const TeacherCard = () => {
//   return (
//     <li className={css.card}>
//       <div className={css.avatar}>
//         <div className={css.indicate}></div>
//         <img
//           className={css.img}
//           src="/hero/hero-blue.webp"
//           width={96}
//           height={96}
//         />
//       </div>

//       <div className={css.name}>
//         <span>Languages</span>
//         <p>Jane Smith</p>
//       </div>

//       <div className={css.about}>
//         <div className={css.aboutItem}>
//           <svg width={16} height={16} fill="none" stroke="#000000">
//             <use href="/sprite.svg#book-open" />
//           </svg>
//           <span>Lessons online</span>
//         </div>

//         <svg width={1} height={16} stroke="rgba(18, 20, 23, 0.2)">
//           <use href="/sprite.svg#icon-divide" />
//         </svg>

//         <div className={css.aboutItem}>
//           <span>Lessons done: 1098</span>
//         </div>

//         <svg width={1} height={16} stroke="rgba(18, 20, 23, 0.2)">
//           <use href="/sprite.svg#icon-divide" />
//         </svg>

//         <div className={css.aboutItem}>
//           <svg width={16} height={16} fill="#FFC531" stroke="#FFC531">
//             <use href="/sprite.svg#star" />
//           </svg>
//           <span>Rating: 4.8</span>
//         </div>

//         <svg width={1} height={16} stroke="rgba(18, 20, 23, 0.2)">
//           <use href="/sprite.svg#icon-divide" />
//         </svg>

//         <div className={css.aboutItem}>
//           <span>
//             Price / 1 hour: <span>30$</span>
//           </span>
//         </div>
//       </div>

//       <svg width={26} height={26} fill="none" stroke="#121417">
//         <use href="/sprite.svg#heart" />
//       </svg>
//     </li>
//   );
// };

// export default TeacherCard;

import css from "./TeacherCard.module.css";

const levels = [
  "#A1 Beginner",
  "#A2 Elementary",
  "#B1 Intermediate",
  "#B2 Upper-Intermediate",
];

const reviews = [
  {
    name: "Frank",
    rating: "4.0",
    text: "Jane's lessons were very helpful. I made good progress.",
    avatar: "/hero/hero-blue.webp",
  },
  {
    name: "Eve",
    rating: "5.0",
    text: "Jane is an amazing teacher! She is patient and supportive.",
    avatar: "/hero/hero-blue.webp",
  },
];

type Props = { isExpanded?: boolean };

export const TeacherCard = ({ isExpanded = false }: Props) => {
  return (
    <li className={css.card}>
      <div className={css.avatar}>
        <span className={css.indicate} />
        <img
          className={css.img}
          src="/hero/hero-blue.webp"
          alt="Jane Smith"
          width={96}
          height={96}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.name}>
            <span>Languages</span>
            <p>Jane Smith</p>
          </div>

          <div className={css.about}>
            <div className={css.stat}>
              <svg width={16} height={16} fill="none" stroke="#121417">
                <use href="/sprite.svg#book-open" />
              </svg>
              <span>Lessons online</span>
            </div>
            <div className={css.stat}>
              <span>Lessons done: 1098</span>
            </div>
            <div className={css.stat}>
              <svg width={16} height={16} fill="#FFC531" stroke="#FFC531">
                <use href="/sprite.svg#star" />
              </svg>
              <span>Rating: 4.8</span>
            </div>
            <div className={css.stat}>
              <span>
                Price / 1 hour: <span className={css.price}>30$</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            className={css.heart}
            aria-label="Add to favorites"
          >
            <svg width={26} height={26} fill="none" stroke="#121417">
              <use href="/sprite.svg#heart" />
            </svg>
          </button>
        </div>

        <ul className={css.info}>
          <li>
            <span className={css.label}>Speaks: </span>
            <span className={css.languages}>German, French</span>
          </li>
          <li>
            <span className={css.label}>Lesson Info: </span>
            Lessons are structured to cover grammar, vocabulary, and practical
            usage of the language.
          </li>
          <li>
            <span className={css.label}>Conditions: </span>
            Welcomes both adult learners and teenagers (13 years and above).
            Provides personalized study plans
          </li>
          {!isExpanded && (
            <button type="button" className={css.readMore}>
              Read more
            </button>
          )}
        </ul>

        {isExpanded && (
          <>
            <p className={css.description}>
              Jane is an experienced and dedicated language teacher specializing
              in German and French. She holds a Bachelor's degree in German
              Studies and a Master's degree in French Literature. Her passion
              for languages and teaching has driven her to become a highly
              proficient and knowledgeable instructor. With over 10 years of
              teaching experience, Jane has helped numerous students of various
              backgrounds and proficiency levels achieve their language learning
              goals. She is skilled at adapting her teaching methods to suit the
              needs and learning styles of her students, ensuring that they feel
              supported and motivated throughout their language journey.
            </p>

            <ul className={css.reviews}>
              {reviews.map((review) => (
                <li key={review.name} className={css.review}>
                  <div className={css.reviewer}>
                    <img
                      className={css.reviewerImg}
                      src={review.avatar}
                      alt={review.name}
                      width={44}
                      height={44}
                    />
                    <div className={css.reviewerInfo}>
                      <span className={css.label}>{review.name}</span>
                      <div className={css.reviewRating}>
                        <svg
                          width={16}
                          height={16}
                          fill="#FFC531"
                          stroke="#FFC531"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <span>{review.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p>{review.text}</p>
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
          <button type="button" className={css.bookBtn}>
            Book trial lesson
          </button>
        )}
      </div>
    </li>
  );
};

export default TeacherCard;
