import styles from "../styles/MidOptions.module.scss";
import { FaSearch, FaInbox, FaMicrophone, FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdChatbubbles } from "react-icons/io";

const MidOptions = () => {
  return (
    <div className={styles["mo"]}>
      <div className={styles["mo-option-cont"]}>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <FaSearch />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>
              Find a Language Partner
            </p>
            <p className={styles["mo-option-text"]}>
              Find the perfect partner for your language exchange
            </p>
          </div>
        </div>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <FaInbox />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>
              Check Your Inbox
            </p>
            <p className={styles["mo-option-text"]}>
              Read and manage your messages, reply to your parners
            </p>
          </div>
        </div>{" "}
      </div>
      <div className={styles["mo-option-cont"]}>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <FaMicrophone />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>Voice Chat</p>
            <p className={styles["mo-option-text"]}>
              Practice your speaking skills and get more fluent than ever{" "}
            </p>
          </div>
        </div>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <CgProfile />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>
              Edit Your Profile
            </p>
            <p className={styles["mo-option-text"]}>
              View and edit your profile{" "}
            </p>
          </div>
        </div>{" "}
      </div>
      <div className={styles["mo-option-cont"]}>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <IoMdChatbubbles />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>Text Chat</p>
            <p className={styles["mo-option-text"]}>
              Chat online and improve your language skills with other members{" "}
            </p>
          </div>
        </div>
        <div className={styles["mo-option"]}>
          <div className={styles["mo-option-icon"]}>
            <FaUserFriends />
          </div>
          <div className={styles["mo-option-text-div"]}>
            <p className={styles["mo-option-text-headline"]}>
              Grow Your Network
            </p>
            <p className={styles["mo-option-text"]}>
              Manage and connect with your language partners{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default MidOptions;
