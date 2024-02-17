import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <ul className={css.box}>
      <li>
        <button onClick={() => updateFeedback("good")} className={css.button}>
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => updateFeedback("neutral")}
          className={css.button}
        >
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")} className={css.button}>
          Bad
        </button>
      </li>
      <li>
        {totalFeedback != 0 && (
          <button onClick={() => resetFeedback()} className={css.button}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
}
