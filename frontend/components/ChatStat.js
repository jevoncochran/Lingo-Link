import styles from "../styles/ChatStat.module.scss";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";

const ChatStat = (props) => {
  return (
    <div className={styles["chat-stat"]}>
      <div className={styles["chat-stat-headline"]}>
        Members in the {props.chatType}
      </div>
      <div className={styles["chat-stat-attendance"]}>
        There are currently {props.numOfParticipants} people chatting
      </div>
      <div className={styles["chat-stat-participants-cont"]}>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiFemaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>Chenjing Chen</p>
          <p className={styles["chat-stat-participant-age"]}>(26)</p>
          <p className={styles["chat-stat-participant-country"]}>China</p>
        </div>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiMaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>André Matheus</p>
          <p className={styles["chat-stat-participant-age"]}>(19)</p>
          <p className={styles["chat-stat-participant-country"]}>Brazil</p>
        </div>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiMaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>João Vitor</p>
          <p className={styles["chat-stat-participant-age"]}>(18)</p>
          <p className={styles["chat-stat-participant-country"]}>Brazil</p>
        </div>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiMaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>Fai C.</p>
          <p className={styles["chat-stat-participant-age"]}>(23)</p>
          <p className={styles["chat-stat-participant-country"]}>Hong Kong</p>
        </div>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiMaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>Ken</p>
          <p className={styles["chat-stat-participant-age"]}>(18)</p>
          <p className={styles["chat-stat-participant-country"]}>Japan</p>
        </div>
        <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiFemaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>Maria Roche</p>
          <p className={styles["chat-stat-participant-age"]}>(21)</p>
          <p className={styles["chat-stat-participant-country"]}>Phillipines</p>
        </div>
        {/* <div className={styles["chat-stat-participant"]}>
          <div className={styles["chat-stat-sex-icon"]}>
            <BiMaleSign />
          </div>
          <p className={styles["chat-stat-participant-name"]}>Robert</p>
          <p className={styles["chat-stat-participant-age"]}>(18)</p>
          <p className={styles["chat-stat-participant-country"]}>Russia</p>
        </div> */}
      </div>
    </div>
  );
};

export default ChatStat;
