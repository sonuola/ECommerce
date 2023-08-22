// import RegisterComponent from "../../Components/Register/Register.component";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../../components/Layout";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const onRegisterUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, password, phone, address, email }
      );
      if (res.data.success) {
        console.log(res);
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        console.log(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className={styles.loginPageContainer}>
        <div className={styles.containerClass}>
          <div className={styles.cardClassLogin}>
            <div className={styles.rowClass}>
              <div className={styles.imageClass}>
                <img
                  src="https://img.freepik.com/premium-vector/coder-completed-task-wrote-code-joy-development-programming-coding-technologies_569013-340.jpg?w=2000"
                  alt="login form"
                  className={styles.sideImageClass}
                />
              </div>

              <div className={styles.bodyClass}>
                <div className={styles.cardBodyClass}>
                  <h5
                    className={styles.signInText}
                    style={{ letterSpacing: "1px" }}
                  >
                    Register Yourself
                  </h5>
                  <input
                    placeholder="Name"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Password"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Email"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Mobile Number"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  <input
                    placeholder="Address"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />

                  <div
                    className={styles.loginButtonLogin}
                    onClick={onRegisterUser}
                  >
                    Register
                  </div>
                  <div className={styles.forgetAndRegisterButton}>
                    <p className={styles.createAccountButtonLogin}>
                      Already have an account?{" "}
                      <Link
                        className={styles.createAccountButton}
                        // to={"/Login"}
                      >
                        {" "}
                        Login{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}
export default Register;
