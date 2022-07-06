import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesDepCard from "../FirstCards/firstcards.module.css";
import Link from "next/link";
import Image from 'next/image'
export default function DepartmentCard(props) {

  return (
    <div>
      <Card className={stylesDepCard.cardsbody}>
        <div className={stylesDepCard.ImageCont}><Link href={"/Departments/" + props.src}><Image loading="eager" className={stylesDepCard.cardImage} alt='' layout="fill" src={"/imgs/" + props.img} />
        </Link></div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={stylesDepCard.cardstexts}>
            {props.text2}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}
