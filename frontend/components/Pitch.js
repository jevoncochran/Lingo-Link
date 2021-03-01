import styles from "../styles/Pitch.module.scss";

const Pitch = () => {
  return (
    <div className={styles.pitch}>
      <p className={styles["pitch-headline"]}>Your Language Exchange Network</p>
      <p className={styles["pitch-description"]}>
        LingoLink is a community of people from all around the world and is
        dedicated to language exchange and language learning. We are working to
        provide you with the best tools that can easily help you learn and
        practice foreign languages.
      </p>
      <div className={styles["pitch-action-div"]}>
        <div
          className={styles["pitch-action-cont"]}
          style={{ border: "1px solid black", borderRadius: "6px" }}
        >
          <p className={styles["pitch-action-cont-headline"]}>JOIN US!</p>
          <p className={styles["pitch-action-cont-text"]}>
            Join the community and become a member. It's FREE!
          </p>
        </div>
        <div className={styles["pitch-action-cont"]}>
          <p className={styles["pitch-action-cont-headline"]}>
            Discover LingoLink
          </p>
          <p className={styles["pitch-action-cont-text"]}>
            Discover how LingoLink can help you learn foreign languages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
