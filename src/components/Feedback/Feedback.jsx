import css from "./Feedback.module.css";

export default function Feedback({ clicks, sum, percent }) {
  return (
    <ul>
      <li className={css.item}>Good:{clicks.good}</li>
      <li className={css.item}>Neutral:{clicks.neutral}</li>
      <li className={css.item}>Bad:{clicks.bad}</li>
      <li className={css.item}>Total:{sum}</li>
      <li className={css.item}>Positive:{percent}%</li>
    </ul>
  );
}
