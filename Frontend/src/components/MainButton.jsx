import styles from "./styles/MainButton.module.css";
export default function MainButton(props) {
  return (
    <>
      <button className={styles.topStyling}>{props.title}</button>
    </>
  );
}
