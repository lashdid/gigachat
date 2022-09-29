import { MainBackdrop } from "@components/LoginRegister/MainBackdrop";
import styles from "@styles/Form.module.scss";

export default function Register() {
  return (
    <MainBackdrop>
      <form className={styles.form} action="/profile">
        <label>Username</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button>ENTER</button>
        <small>
          Already have an account? <a href="/login">Login here</a>
        </small>
      </form>
    </MainBackdrop>
  );
}
