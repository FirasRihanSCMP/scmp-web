import React from 'react'
import { Card } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'
import stylesEventCard from "./EventsCard.module.css"
import stylesDepCard from "../../components/FirstCards/firstcards.module.css";
import Image from 'next/image'
export default function EventsCard(props) {
  console.log(props)
  return (
    <div key={props.key}>


      <Card className={stylesDepCard.cardsbody}>
        <div className={stylesDepCard.ImageCont}>
          <Link href={`/Events/${props.src}`}>
            <Image
              placeholder="blur"
              blurDataURL={'/imgs' + props.img}
              loading='eager'
              className={stylesDepCard.cardImage}
              alt=''
              layout="fill"
              src={"/imgs" + props.img}

            />
          </Link></div>



        <Card.Body className={stylesEventCard.cardBody}>

          <Card.Title className={stylesEventCard.cardtitle}>{props.title}</Card.Title>
          <h6>{props.date}</h6>


          <Card.Text className={stylesEventCard.cardstexts}>
            {props.text2}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
{/*  <Image
                                priority
                                placeholder="blur"
                                blurDataURL={'/' + props.img}
                                loading="eager"
                                src={"/imgs/" + props.img}
                                className={`d-block w-100 `}
                                alt=""
                                layout="fill"
                            /> */}
{/*  <LazyLoadImage
       className={stylesEventCard.cardImage}
       variant="top"
       effect='blur'
       src={"./imgs/" + props.img} /> */}