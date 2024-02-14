import css from "./Options.module.css";

export default function Options({ onClick, children }) {
  return (
    <div className={css.box}>
      <button onClick={onClick}>{children}</button>
      {/* <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button> */}
    </div>
  );
}
