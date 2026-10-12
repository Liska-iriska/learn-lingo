// import css from "./Filters.module.css";

// function Filters() {
//   console.log(css);
//   return (
//     <>
//       <div className={css.filters}>
//         <div className={css.filterGroup}>
//           <label htmlFor="language" className={css.label}>
//             Languages
//           </label>
//           <select className={css.select} id="language">
//             <option value=""></option>
//             <option value="french">French</option>
//             <option value="english">English</option>
//             <option value="german">German</option>
//             <option value="ukrainian">Ukrainian</option>
//             <option value="polish">Polish</option>
//           </select>
//         </div>

//         <div className={css.filterGroup}>
//           <label htmlFor="level" className={css.label}>
//             Level of knowledge
//           </label>
//           <select className={css.select} id="level">
//             <option value=""></option>
//             <option value="beginner">A1 Beginner</option>
//             <option value="elementary">A2 Elementary</option>
//             <option value="intermediate">B1 Intermediate</option>
//             <option value="advanced">B2 Upper-Intermediate</option>
//           </select>
//         </div>

//         <div className={css.filterGroup}>
//           <label htmlFor="price" className={css.label}>
//             Price
//           </label>
//           <select className={css.select} id="price">
//             <option value=""></option>
//             <option value="10">10$</option>
//             <option value="20">20$</option>
//             <option value="30">30$</option>
//             <option value="40">40$</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Filters;

import { useState } from "react";
import Select from "../Select/Select";
import css from "./Filters.module.css";

const languages = ["French", "English", "German", "Ukrainian", "Polish"];
const levels = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
];
const prices = ["10", "20", "30", "40"];

export default function Filters() {
  const [language, setLanguage] = useState(languages[0]);
  const [level, setLevel] = useState(levels[0]);
  const [price, setPrice] = useState(prices[0]);

  return (
    <div className={css.filters}>
      <Select
        id="language"
        label="Languages"
        options={languages}
        value={language}
        onChange={setLanguage}
      />
      <Select
        id="level"
        label="Level of knowledge"
        options={levels}
        value={level}
        onChange={setLevel}
      />
      <Select
        id="price"
        label="Price"
        options={prices}
        value={price}
        onChange={setPrice}
        formatValue={(v) => `${v} $`}
      />
    </div>
  );
}
