import styles from "./styles.module.scss";
import { dataProps } from "src/pages/chat";
import { LegacyRef, useEffect, useRef } from "react";

interface ChatContainerProps {
  data: dataProps[];
}

export function ChatContainer(props: ChatContainerProps) {
  const chatContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainer.current?.scrollTop !== undefined) {
      chatContainer.current.scrollTop = chatContainer.current?.scrollHeight;
    }
  }, [props.data]);

  return (
    <div className={styles.chat_container} ref={chatContainer}>
      {props.data.map((chat, idx) => (
        <div key={idx} className={styles.chat}>
          <img src={chat.profileUrl} alt="profile" />
          <div className={styles.chat_text}>
            <small>
              {chat.name} at {chat.sendAt}
            </small>
            <p>{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
