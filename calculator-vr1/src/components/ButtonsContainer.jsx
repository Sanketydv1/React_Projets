import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonsName.map((buttons) => (
        <button className={styles.button}>{buttons}</button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
