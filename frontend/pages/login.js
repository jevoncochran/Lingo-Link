import { useState, useEffect } from "react";
import styles from "../styles/Login.module.scss";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { userLogin } from "../redux/actions";

const Login = (props) => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.userLogin(credentials);
  };

  // Routes to home page once user is logged in
  useEffect(() => {
    if (props.account) {
      router.push("/");
    }
  }, [props.account]);
  return (
    <div className={styles.login}>
      <form className={styles["login-form"]} onSubmit={handleFormSubmit}>
        <p>Member Login</p>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.user.account,
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
