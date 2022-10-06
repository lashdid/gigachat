import styles from "./styles.module.scss";
import "@fontsource/poppins/600.css";
import { useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  FullInputChat,
  Navbar,
  Sidebar,
} from "@components/Chat";

export type dataProps = {
  profileUrl: string;
  name: string;
  sendAt: string;
  message: string;
};

export default function Chat() {
  const [data, setData] = useState<dataProps[]>([]);

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <ChatContainer data={data} />
        <FullInputChat
          submitData={(inputValue) =>
            setData([
              ...data,
              {
                profileUrl: "assets/gigachad_background.jpg",
                name: "DeadFace69",
                sendAt: "4:20 PM",
                message: inputValue,
              },
            ])
          }
        />
      </div>
    </main>
  );
}
