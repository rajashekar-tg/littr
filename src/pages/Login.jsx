import React, { useState } from "react";
import Logo from "../components/Logo.png";
import { Form, Input, Button, Checkbox, Col, Row, Card, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Alert from "./Alert";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialValues);
  //errors
  const [error, setError] = useState(false);
  //success
  const [success, setSuccess] = useState(false);
  //global state
  const { showAlert, displayAlert } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    let currentUser = {
      email: values.email,
    };
    console.log(currentUser);

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });
    if (!res.ok) {
      setError(true);
      return;
    }
    const data = await res.json();
    // setError(true);
    //alert(data);

    //Login successfully is comming from server res
    if (data === "Login successfully") {
      localStorage.setItem("authenticated", "true");
      setSuccess(true);
      setTimeout(() => {
        navigate("/pricing");
      }, 3000);
      return;
    }
    setValues({ email: "", password: "" });
  };

  return (
    <div style={{ backgroundColor: "#EBFAF4", height: "97vh" }}>
      <div className="header-login">
        <img
          src={Logo}
          alt="Logo"
          width="110rem"
          style={{ marginLeft: "1rem" }}
        />
      </div>
      <Row gutter={15} style={{ marginTop: "5rem" }}>
        <Col span={8} offset={8}>
          <Card bordered={true}>
            <h1
              style={{
                color: "green",
                justifyContent: "center",
                float: "center",
                alignItems: "center",
              }}
            >
              Littr Login
            </h1>
            <Divider />
            {showAlert && <Alert />}

            {/* error */}
            <div>
              {error ? (
                <h6 className="alert alert-danger p-2 text-center">
                  Please check your email & password..!
                </h6>
              ) : (
                ""
              )}
            </div>
            {/*success*/}
            <div>
              {success ? (
                <h6 className="alert alert-success p-2 text-center">
                  Login Success Redirecting!....
                </h6>
              ) : (
                ""
              )}
            </div>
            <Form
              name="normal_login"
              className="login-form mt-2"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  onClick={handleClick}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import logo from "../components/Logo.png";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "../pages/Login.css";
// import { FaUser, FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import Alert from "./Alert";
// import { useAppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   isMember: true,
// };
// function Login() {
//   const [values, setValues] = useState(initialValues);
//global state
//   const { showAlert, displayAlert, loginUser } = useAppContext();
//navigate
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     e.preventDefault();
//     setValues({ ...values, [name]: value });
//   };
//   const toggleClick = (e) => {
//     e.preventDefault();
//     setValues({ ...values, isMember: !values.isMember });
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, isMember } = values;
//     if (!email || !password || (!isMember && !name)) {
//       displayAlert();
//       return;
//     }
//     console.log(values);
//     const currentUser = { name, email, password };
//     if (isMember) {
//       loginUser(currentUser);
//     }
//     // navigate("/pricing");
//   };

//   return (
//     <>
//       <div style={{ backgroundColor: "#EBFAF4", height: "97vh" }}>
//         <div className="header-login">
//           <img
//             src={logo}
//             alt="logo"
//             width="110rem"
//             style={{ marginLeft: "1rem" }}
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "500px",
//           }}
//         >
//           <form
//             className="shadow-lg p-4 mb-5 bg-white rounded"
//             onSubmit={onSubmit}
//           >
//             {values.isMember ? (
//               <h2 className="text-success">Littr Login</h2>
//             ) : (
//               <h3 className="text-success">Littr Register</h3>
//             )}
//             {showAlert && <Alert />}
//             {!values.isMember && (
//               <div className="input-group mt-5">
//                 <div input-group-prepend>
//                   <span className="input-group-text">
//                     <FaUser style={{ height: "25px" }} />
//                   </span>
//                 </div>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Username "
//                   size="35"
//                   name="name"
//                   value={values.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//             <div className="input-group mt-3">
//               <div input-group-prepend>
//                 <span className="input-group-text">
//                   <MdEmail style={{ height: "25px" }} />
//                 </span>
//               </div>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="email "
//                 size="35"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="input-group mt-3">
//               <div input-group-prepend>
//                 <span className="input-group-text">
//                   <FaLock style={{ height: "25px" }} />
//                 </span>
//               </div>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password "
//                 size="35"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="d-grid mt-4">
//               <button type="submit" className="btn btn-outline-success">
//                 Submit
//               </button>
//             </div>
//             <div className="mt-3 d-flex ms-5">
//               {values.isMember ? (
//                 <p style={{ color: "#5f6873" }}>Not a member yet..!</p>
//               ) : (
//                 <p style={{ color: "#5f6873" }}>Already a member..</p>
//               )}
//               <span onClick={toggleClick}>
//                 {values.isMember ? (
//                   <h6
//                     style={{
//                       cursor: "pointer",
//                       color: "green",
//                       fontSize: "18px",
//                       fontStyle: "italic",
//                     }}
//                   >
//                     &nbsp;Register
//                   </h6>
//                 ) : (
//                   <h6
//                     style={{
//                       cursor: "pointer",
//                       color: "green",
//                       fontSize: "18px",
//                       fontStyle: "italic",
//                     }}
//                   >
//                     &nbsp;Login
//                   </h6>
//                 )}
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
