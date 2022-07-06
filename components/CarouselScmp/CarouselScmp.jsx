import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import stylesCarousel from "./carouselSCMP.module.css"
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';

export default function CarouselScmp(props) {
    return (
        <div className={stylesCarousel.bodyWidth}>
            <Carousel /*  fade={true} */ >
                {props.img ? props.img.map(img => {
                    return <Carousel.Item interval={img.duration || 5000} key={img.id} className={stylesCarousel.carouselmain}>
                        {img.link ? <div className={stylesCarousel.ImgCont} style={{ height: `${props.style}vw` }}> <Link href={`/${img.link}`}>
                            <Image
                                priority
                                placeholder="blur"
                                blurDataURL={'/' + img.img}
                                loading="eager"
                                src={"/imgs/" + img.img}
                                className={`d-block w-100 ${stylesCarousel.img}`}
                                alt=""
                                layout="fill"
                            /></Link></div> : <div style={{ height: `${props.style}vw` }} className={stylesCarousel.ImgCont}>
                            <Image
                                priority
                                placeholder="blur"
                                blurDataURL={'/' + img.img}
                                loading="eager"
                                src={"/imgs/" + img.img}
                                className={`d-block w-100 ${stylesCarousel.img}`}
                                alt=""
                                layout="fill"
                            />
                        </div>}
                    </Carousel.Item>
                }) : ""}

            </Carousel>


        </div>
    )
}


