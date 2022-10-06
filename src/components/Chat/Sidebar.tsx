import styles from './styles.module.scss'

export function Sidebar() {
  return (
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
  );
}
