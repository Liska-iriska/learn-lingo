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
