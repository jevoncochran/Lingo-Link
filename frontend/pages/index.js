import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Pitch from "../components/Pitch";
import RightOptions from "../components/RightOptions";
import MidOptions from "../components/MidOptions";
import ChatStat from "../components/ChatStat";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <Layout>
        <div className={styles["home-body"]}>
          <div className={styles["home-left"]}>
            <Pitch />
            <MidOptions />
            <div className={styles["chat-stat-div"]}>
              <ChatStat chatType="voice chat" numOfParticipants={49} />
              <ChatStat chatType="text chat" numOfParticipants={189} />
            </div>
          </div>
          <div className={styles["home-right"]}>
            <RightOptions />
          </div>
        </div>
      </Layout>
    </div>
  );
}
