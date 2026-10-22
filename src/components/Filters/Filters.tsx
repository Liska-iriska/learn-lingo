import Select from "../Select/Select";
import css from "./Filters.module.css";

const languages = [
  "All",
  "French",
  "English",
  "German",
  "Ukrainian",
  "Polish",
  "Spanish",
  "Mandarin Chinese",
  "Italian",
];
const levels = [
  "All",
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];
const prices = ["-", "30", "40", "50"];

interface FiltersProps {
  language: string;
  setLanguage: (val: string) => void;
  level: string;
  setLevel: (val: string) => void;
  price: string;
  setPrice: (val: string) => void;
}

export default function Filters({
  language,
  setLanguage,
  level,
  setLevel,
  price,
  setPrice,
}: FiltersProps) {
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
        formatValue={(v) => (v === "-" ? v : `${v} $`)}
      />
    </div>
  );
}
