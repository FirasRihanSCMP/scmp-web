import React, { useEffect, useState } from "react";
import stylesadmin from "./admin.module.css";
import { Row, Col } from "react-bootstrap";
import Uploader from "./Eventuploader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
/* import { TabTitle } from "../../actions/GeneralFunctions";
 *//* const fileTypes = ["JPG", "PNG", "GIF"]; */
 import { NextSeo } from 'next-seo'


export default function Admin() {
  
/*   TabTitle('Admin - Scientific Center For Manufacturing And Production')
 */
const [loggedIn, setloggedIn] = useState(false);
 const setResult=(e)=>{
 /*  console.log(e)  */
  if(e===false||e==="Network Error"||typeof e==="undefined"){
    setloggedIn(false)
  }
else{/* console.log(e)  */
  setloggedIn(true)}
 } 



return(
/*   loggedIn ? ( */
  <div>
        <NextSeo 
      title='Admin - SCMP'
      description='Admin - SCMP'
      />
  <Row className={stylesadmin.root}> 
    <Uploader/>
   {/*  <UploadEvent/> */}
   <ToastContainer/>  
  </Row>
</div>
)/*  : (
<Auth handleResult={setResult}/>

)) */
/*   return <>{props.isLoggedIn ?  <div>
     <Row className={stylesadmin.root}> 
<Uploader/>
    <ToastContainer/>  </Row>
    </div> :<Auth/> }</> */
}