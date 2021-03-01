import styles from "../styles/RightOptions.module.scss";
import {
  FaHome,
  FaSearch,
  FaMicrophone,
  FaInbox,
  FaUserFriends,
} from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const RightOptions = () => {
  return (
    <div className={styles["ro"]}>
      <div className={styles["ro-headline"]}>LingoLink</div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <FaHome />
        </div>
        <p className={styles["ro-option-text"]}>Home</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <FaSearch />
        </div>
        <p className={styles["ro-option-text"]}>Member Search</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <FaMicrophone />
        </div>
        <p className={styles["ro-option-text"]}>Voice Chat</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <IoMdChatbubbles />
        </div>
        <p className={styles["ro-option-text"]}>Text Chat</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <FaInbox />
        </div>
        <p className={styles["ro-option-text"]}>My Inbox</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <CgProfile />
        </div>
        <p className={styles["ro-option-text"]}>My Profile</p>
      </div>
      <div className={styles["ro-option"]}>
        <div className={styles["ro-option-icon"]}>
          <FaUserFriends />
        </div>
        <p className={styles["ro-option-text"]}>My Network</p>
      </div>
    </div>
  );
};

export default RightOptions;
