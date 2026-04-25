import styles from "./styles/MainButton.module.css";

export default function MainButton({
  title,
  disabled,
  onClicked,
  height,
  width,
}) {
  return (
    <button
      type="submit"
      // type="button"
      className={styles.topStyling}
      disabled={disabled}
      onClick={(event) => onClicked(event)}
      style={{ height: height, width: width }}
    >
      {title}
    </button>
  );
}
