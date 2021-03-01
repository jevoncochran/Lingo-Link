import styles from "../styles/TopBar.module.scss";
import { RiLoginBoxLine } from "react-icons/ri";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className={styles["top-bar"]}>
      <p className={styles["top-bar-title"]}>LingoLink</p>
      <select className={styles["top-bar-select"]}>
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
        <option>Portuguese</option>
      </select>
      <div className={styles["top-bar-login-div"]}>
        <div className={styles["top-bar-login-icon"]}>
          <RiLoginBoxLine />
        </div>
        <Link href="/login">
          <div>
            <p className={styles["top-bar-login-text"]}>Member</p>
            <p className={styles["top-bar-login-text"]}>Log In</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
