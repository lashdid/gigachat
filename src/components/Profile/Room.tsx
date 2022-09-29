import styles from "./styles.module.scss";

interface RoomProps {
  name: string;
  maxPeople: number;
  peoplesNumber: number;
  joinLink: string;
  enableDelete?: boolean;
  status?: string;
  createdBy?: string;
}

export function Room(props: RoomProps) {
  return (
    <div className={styles.room}>
      <div className={styles.room_text}>
        <span>
          {props.peoplesNumber}/{props.maxPeople}
        </span>
        <div className={styles.room_caption}>
          <p>{props.name}</p>
          {props.status && <small>{props.status.toUpperCase()}</small>}
          {props.createdBy && <small>By : {props.createdBy}</small>}
        </div>
      </div>
      <div className={styles.buttons}>
        <a href={props.joinLink} className={styles.button}>Join</a>
        {props.enableDelete && <button className={styles.button}>Delete</button>}
      </div>
    </div>
  );
}
