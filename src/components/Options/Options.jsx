import css from "./Options.module.css";

export const Options = () => {
  return (
    <div className={css.box}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
};
