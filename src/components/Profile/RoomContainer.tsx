import { ReactElement, ReactNode, useState } from "react";
import styles from "./styles.module.scss";

interface RoomContainerProps {
  title: string;
  children: ReactNode;
  isEmpty: boolean
}

export function RoomContainer(props: RoomContainerProps) {
  return (
    <section className={styles.room_container}>
      <h2>{props.title}</h2>
      {props.isEmpty ? <small>You don't have any rooms.</small> : props.children}
    </section>
  );
}
