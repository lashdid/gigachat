import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>#123456</span>
      <a href="/profile">Leave Room</a>
    </nav>
  );
}
