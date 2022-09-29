import { RoomContainer, Room } from "@components/Profile";
import styles from "./styles.module.scss";

export default function Profile() {
  return (
    <main className={styles.main}>
      <h1>GIGACHAT</h1>
      <section className={styles.profile_container}>
        <img src="assets/gigachad_background.jpg" alt="" />
        <div className={styles.profile_items}>
          <h1>Greetings, DeadFace69</h1>
          <div className={styles.profile_buttons}>
            <button className={styles.button}>Create Private Room</button>
            <button className={styles.button}>Create Public Room</button>
            <button className={styles.button_logout}>Logout</button>
          </div>
        </div>
      </section>
      <RoomContainer title="Your Rooms" isEmpty={false}>
        <Room
          name="Chad's Room"
          peoplesNumber={0}
          maxPeople={10}
          joinLink="/chat"
          status="public"
          enableDelete
        />
        <Room
          name="Private Chad Room"
          peoplesNumber={0}
          maxPeople={10}
          joinLink="/chat"
          status="private"
          enableDelete
        />
      </RoomContainer>
      <RoomContainer title="Public Rooms" isEmpty={false}>
        <Room
          name="Chad's Room"
          peoplesNumber={0}
          maxPeople={10}
          joinLink="/chat"
          createdBy="DeadFace69"
        />
      </RoomContainer>
    </main>
  );
}
