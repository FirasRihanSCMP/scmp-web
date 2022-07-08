import React from "react";
import { Col, Row } from "react-bootstrap";
import stylesParagraph from "./paragraph.module.css";
import stylesDepartment from "../../styles/SepDepartment.module.css";
import Image from "next/image";
import { useState } from "react";
export default function paragraph(props) {
  
  return (
    <div>
      <h1 className={stylesDepartment.depTitle}>{props.topTitle}</h1>
      <Row className={[stylesParagraph.pardiv]}>

        <Col className={stylesParagraph.parCol} xs={12} sm={12} md={12} lg={12} xl={{ span: 6, offset: 0 }} >

          <div className={stylesParagraph.divPar}><p className={stylesParagraph.paragraph}>{props.text}</p> </div>

        </Col>
        <Col className={stylesParagraph.imgCol} xs={12} sm={12} md={12} lg={12} xl={{ span: 6, offset: 0 }}>
          <Image
          priority
          placeholder="blur"
          blurDataURL={'/'+props.img}
            /* loading="eager" */
            className={stylesParagraph.img}
            src={'/' + props.img}
            alt=""
            layout="fill"
          />
        </Col>
      </Row>
    </div>
  );
}
