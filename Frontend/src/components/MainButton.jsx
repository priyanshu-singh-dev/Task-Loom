import styles from "./styles/MainButton.module.css";

export default function MainButton({
  title,
  disabled,
  onClicked,
  height,
  width,
  bgColor,
}) {
  return (
    <button
      type="submit"
      className={styles.topStyling}
      disabled={disabled}
      onClick={(event) => onClicked(event)}
      style={{ height: height, width: width, backgroundColor: bgColor }}
    >
      {title}
    </button>
  );
}
