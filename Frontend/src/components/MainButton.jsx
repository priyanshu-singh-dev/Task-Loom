import styles from "./styles/MainButton.module.css";

export default function MainButton({ title, disabled, onClicked }) {
  return (
    <button
      type="submit"
      className={styles.topStyling}
      disabled={disabled}
      onClick={(event) => onClicked(event)}
    >
      {title}
    </button>
  );
}
