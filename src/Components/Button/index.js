import styles from "./index.module.scss";
function Button({ children, onClick }) {
  return (
    <button className={styles["wrapper"]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
