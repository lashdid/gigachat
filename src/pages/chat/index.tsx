import InputChat from "@components/Chat/InputChat";
import styles from "./styles.module.scss";

export default function Chat() {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <h3>Chad's Room</h3>
        <small>Humans (3/10)</small>
        <div className={styles.humans_container}>
          <div className={styles.human}>
            <img src="assets/gigachad_background.jpg" alt="" />
            <span>DeadFace69</span>
          </div>
          <div className={styles.human}>
            <img src="assets/gigachad.png" alt="" />
            <span>Chad Man</span>
          </div>
          <div className={styles.human}>
            <img src="assets/gigachad1.png" alt="" />
            <span>The Chaddest</span>
          </div>
        </div>
      </aside>
      <div className={styles.content}>
        <nav className={styles.navbar}>
          <span>#123456</span>
          <a href="/profile">Leave Room</a>
        </nav>
        <div className={styles.chat_container}>

        </div>
        <div className={styles.input_container}>
          <InputChat placeholder='Type a message' multiline/>
          <div className={styles.button_container}>
            <button>Send</button>
          </div>
        </div>
      </div>
    </main>
  );
}
