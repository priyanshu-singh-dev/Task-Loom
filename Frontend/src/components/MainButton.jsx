import styles from "./styles/MainButton.module.css";
export default function MainButton(props) {
  return (
    <>
      <button
        className={styles.topStyling}
        onClick={(event) => props.onClicked(event)}
      >
        {props.title}
      </button>
    </>
  );
}
