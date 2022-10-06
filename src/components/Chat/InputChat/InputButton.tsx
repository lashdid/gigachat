import styles from "./InputButton.module.scss";

interface InputButtonProps {
  onClick: () => void;
}

export function InputButton(props: InputButtonProps) {
  return (
    <div className={styles.button_container}>
      <button onClick={props.onClick}>Send</button>
    </div>
  );
}
