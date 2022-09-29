import { ReactElement } from 'react';
import styles from './MainBackdrop.module.scss'

export function MainBackdrop(props: {children : ReactElement}) {
  return (
    <main className={styles.main}>
      <img src="assets/gigachad1.png" alt="" />
      <h1>GIGACHAT</h1>
      {props.children}
    </main>
  );
}