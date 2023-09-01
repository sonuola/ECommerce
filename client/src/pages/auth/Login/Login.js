import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LoginComponent from "../../Components/Login/Login.component";
// import PagetabComponent from "../../Components/Pagetab/Pagetab.component";
// import PagebaseMiddleware from "../../Middlewares/Pagebase/Pagebase.middleware";
// import './Login.page.css'
import styles from "./Login.module.css";
import Layout from "../../../components/Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import { useCookies } from "react-cookie";
// import APIRoutes from "./../../Utils/APIRoutes.json"
// import "./Login.component.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
// import React from 'react';

// let tabItemData = [
//     {to:"/", content: 'Home'  },
//     {to:"/register", content: 'Register'  },
//     {to:"/resetpassword", content: 'Reset Password'  },
//   ]
function Login() {
  const [auth, setAuth] = useAuth();
  let [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  //   const [cookies, setCookie] = useCookies(["sessionid"]);

  //   function createCookie(key, value, path) {
  //       setCookie(key, value, { path: path });
  //   }

  //   useEffect(() => {
  //     console.log(form);
  //   }, [form]);

  const onLogin = async () => {
    try {
      setForm({ email: username, password });
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email: username, password }
      );
      if (res.data.success) {
        // setcategories(data.category);
        console.log(res);
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.log(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      //   toast.error("Something went wrong in getting categories");
    }
  };

  // useEffect(() => {
  //   // For declaring Title
  //   document.title = 'Login - Redesigned OJ';
  // });

  //   return <PagebaseMiddleware>
  //       {/* <h2 style={{margin:0}}>Login Form</h2>
  //       <PagetabComponent tabItems={tabItemData} />
  //       <hr /> */}

  //       <LoginComponent />
  //   </PagebaseMiddleware>

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   let onFormSubmit = async (e)=>{
  //     e.preventDefault()
  //     setResultState(prev=>{
  //         return {...prev,
  //             isLoading: true
  //         }
  //     })

  //     let keys = Object.keys(form);
  //     for(let i=0; i < keys.length ; i++){
  //         if(form[keys[i]].length == 0){
  //             setResultState(prev=>{
  //                 return {...prev,
  //                     isResult: true,
  //                     isLoading: false,
  //                     isFormSuccess:true,
  //                     alertMessage:'Please fill all the fields'
  //                 }
  //             })

  //             return;
  //         }
  //     }
  //       let data = {password,username}
  //     console.log(form)
  //     let response = await fetch(APIRoutes.SERVER_HOST + APIRoutes.APIS.LOGIN_USER,{
  //         method:"POST",
  //         credentials: 'include',
  //         headers:{
  //             'Content-type':'application/json'
  //         },
  //         body:JSON.stringify(data)
  //     })
  //     if(response.ok){
  //         let x = response.headers.entries()
  //         console.log(response)
  //         for(let entry of response.headers.entries()) {
  //             console.log('header', entry);
  //           }
  //         // createCookie(, )
  //         setResultState(prev=>{
  //             return {...prev,
  //                 isResult: true,
  //                 isLoading: false,
  //                 isFormSuccess:true,
  //                 alertMessage:'login successfull'
  //             }
  //         })

  //         alert("Login Successfull, goto problem section to solve problems")

  //         navigate("/")

  //     }else{
  //         setResultState(prev=>{
  //             return {...prev,
  //                 isResult: true,
  //                 isLoading: false,
  //                 isFormSuccess:true,
  //                 alertMessage:'login failed'
  //             }
  //         })
  //         alert("Login Failed")
  //     }
  // }

  return (
    <Layout title="Login">
      <div className={styles.loginPageContainer}>
        {/* <LoginComponent/> */}
        <div className={styles.containerClass}>
          <div className={styles.cardClassLogin}>
            <div className={styles.rowClass}>
              <div className={styles.imageClass}>
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/11/18/24/woman-5823482_1280.png"
                  alt="login form"
                  className={styles.sideImageClass}
                />
              </div>

              <div className={styles.bodyClass}>
                <div className={styles.cardBodyClass}>
                  {/* <div className={styles.nameAndLogo}>
                    <img
                      className={styles.logoImage}
                      src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-judge-auction-flatarticons-blue-flatarticons-1.png"
                    />
                    <span className={styles.logoTextLoginPage}>
                      Scalable OJ
                    </span>
                  </div> */}

                  <h5
                    className={styles.signInText}
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <input
                    placeholder="Email"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Password"
                    className={styles.inputBoxLogin}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <div className={styles.loginButtonLogin} onClick={onLogin}>
                    Login
                  </div>
                  <div className={styles.forgetAndRegisterButton}>
                    <Link
                      className={styles.createAccountButtonLogin}
                      // to={"/resetpassword"}
                    >
                      {" "}
                      Forget Password{" "}
                    </Link>
                    <p className={styles.createAccountButtonLogin}>
                      Don't have an account?{" "}
                      <Link
                        className={styles.createAccountButton}
                        to={"/register"}
                      >
                        {" "}
                        Register here{" "}
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

export default Login;
