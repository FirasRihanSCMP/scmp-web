import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import stylesAuth from "./Auth.module.css";
import Feasibility from "../../components/Feasibility/Feasibility";
import { loginF } from "../../components/actions/loginF";
/* import { TabTitle } from "../actions/GeneralFunctions";
 */import { animated, useTransition } from "react-spring";
import Admin from "../../components/admin/admin";
import { useEffect } from "react";
import { NextSeo } from 'next-seo'
export default function Auth(props) {
/*   TabTitle('Authentication - Scientific Center For Manufacturing And Production')
 */  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [res, setRes] = useState({ auth: false, type: '', reason: '' })
  
  const [ShowBanner, setShowBanner] = useState({ show: false, value: "", message: "" })
  const transition = useTransition(ShowBanner.show, {
    from: { opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { opacity: 0 },
  });
  
  useEffect(() => {
setTimeout(() => {
  setShowBanner({ ...ShowBanner, show: "", value: "" });
}, 3000);

  }, [ShowBanner.show])
  
  const onClick = () => setShowBanner({ ...ShowBanner, show: "", value: "" });
  function handleCheck() {
    setShowPass(!showPass);

  }
  const Handlelogin = async (e) => {
    e.preventDefault();
    const respond = await loginF(e)
    if(respond.auth===false){
      setShowBanner({ ...ShowBanner, show: true, value: false ,message:"Wrong Username or Password!"});

    }
    setRes({...res,...respond})
  }

  return (
    <div className={res.auth==false? stylesAuth.root : ''}>
         <NextSeo 
      title='Auth - SCMP'
      description='Auth - SCMP'
      />
      {transition((style, item) =>
        item ? (
          <animated.div
            onClick={onClick}
            style={style}
            className={stylesAuth.banner}
          >
            <div onClick={onClick} className={stylesAuth.failBanner}>
             {ShowBanner.message}
              
            </div>
          </animated.div>
        ) : 
          ""
        
      )}
      {res.auth === false ? <div className={stylesAuth.formDiv}> <h1 className={stylesAuth.authTitle}>Staff Verification</h1>
        <Form className={stylesAuth.bodyWidth} onSubmit={Handlelogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Username</Form.Label>
            <Form.Control
              onBlur={(e) => setEmail(e.target.value)}
              type="username"
              placeholder="Enter Username"
              defaultValue=""
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPass ? "text" : "password"}
              onBlur={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={handleCheck}
              label="Show Password"
            />
          </Form.Group>
          <Button
            className={stylesAuth.submitButton}
            as="input"
            variant="warning"
            type="submit"
            value="Submit"
          />
        </Form></div> : res.auth === true ? res.type === 'admin' ? <Admin className={stylesAuth.rendered}/> : res.type === 'fs' ? <Feasibility className={stylesAuth.rendered}/> :res.type==='normal' ? <Auth/> :  <div></div> : <div></div>}

    </div>
  );
}
