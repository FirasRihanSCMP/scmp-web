import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
/* import stylesEvents from "./events.module.css"; */
import stylesEvent from "./eventcarousel.module.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image'
export default function EventsComp(props) {

  const [Imgs, setImgs] = useState(props.img);





  return (
    <div className={stylesEvent.root}>



<Carousel  touch={true} fade={false} indicators={false} className={stylesEvent.carouselImages}>
        {props.img ? JSON.parse(props.img).map((val) => {
          return <Carousel.Item interval={5000} key={val} className={stylesEvent.carouselmain} >
   
            <img
          
              className={`d-block w-100 ${stylesEvent.img}`}
              src={"/imgs/events/" + val}
              alt="First slide"
            
            />

          </Carousel.Item>
        }) :""}

        


      </Carousel>

    </div>
  )
}
