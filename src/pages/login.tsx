import { MainBackdrop } from "@components/LoginRegister/MainBackdrop";
import styles from "@styles/Form.module.scss";

export default function Login() {
  return (
    <MainBackdrop>
      <form className={styles.form} action="/profile">
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button>ENTER</button>
        <small>
          Don't have an account? <a href="/register">Register here</a>
        </small>
      </form>
    </MainBackdrop>
  );
}
