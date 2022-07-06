import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

import stylesAboutUs from "./aboutUs.module.css";

export default function aboutUsTop() {

  return (
    <div className={stylesAboutUs.root1}>
      <Row className={stylesAboutUs.firstRow}>

        <div className={stylesAboutUs.title}>
          {" "}
          <div className={stylesAboutUs.textDiv}>
            <h1 className={stylesAboutUs.aboutHeader}>What Do We Do?</h1>
            <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="/Icons/project1.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link href="/AboutUs/Research" ><a className={stylesAboutUs.text}>Research</a></Link></Col></Row>
            <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="/Icons/technology.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link href="/AboutUs/TechProvider"><a className={stylesAboutUs.text}>Provide Technology</a></Link></Col></Row>
            <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="/Icons/project2.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link href="/AboutUs/InvFund"><a className={stylesAboutUs.text}>Investment Funding</a></Link></Col></Row>
            <Row className={stylesAboutUs.iconsRow}><Col className={stylesAboutUs.imgCol} sm={6}><img className={stylesAboutUs.icon2} src="/Icons/ideas.png" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link href="/AboutUs/Ideas"><a className={stylesAboutUs.text}>Incubate Ideas</a></Link></Col></Row>

            {/*   <Row className={stylesAboutUs.iconsRow}><Col sm={6}><img className={stylesAboutUs.icon2} src="./Icons/project2.svg" alt="" /> </Col> <Col className={stylesAboutUs.Col} sm={10}><Link href="about5"  href="/" className={stylesAboutUs.text}>Lorem ipsum, dolor sit amet consectetur</Link></Col></Row>  */}

          </div>
        </div>
      </Row>

    </div>
  )
}