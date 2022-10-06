import { ChangeEvent, useState } from "react";
import { InputChat, InputButton } from "./InputChat";
import styles from "./styles.module.scss";

interface FullInputChatProps {
  submitData: (text: string) => void;
}

export function FullInputChat(props: FullInputChatProps) {
  const [inputValue, setInputValue] = useState("");

  const inputData = () => {
    inputValue && props.submitData(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.input_container}>
      <InputChat
        placeholder="Type a message ( Ctrl + Enter to send )"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputValue(e.currentTarget.value)
        }
        value={inputValue}
        onKeyPress={(event: KeyboardEvent) =>
          event.ctrlKey && event.key === "Enter" && inputData()
        }
        multiline
      />
      <InputButton onClick={() => inputData()} />
    </div>
  );
}
