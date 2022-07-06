import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Events from "./index";
import EventsComp from "../../components/EventsComp/EventsComp";
import Topstyles from "./seperateEvent.module.css";
import Youtube from 'react-youtube'
import Spinner from "../../components/ClipLoader/Spinner";
import { TabTitle } from "../../components/actions/GeneralFunctions";
import { Col, Row } from "react-bootstrap";
import stylesEvent from "../../components/EventsComp/eventcarousel.module.css"
import {useRouter} from 'next/router'
import { NextSeo } from 'next-seo'

export default function SeperateEvent(props) {
  const [Event, setEvent] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);
  const [TabTitle, setTabTitle] = useState('')
  const router= useRouter()
  const id= router.query.id

  useEffect(() => {
if(id){ 

  async function fetchData() {
  await axios
    .post("https://www.scmp-lb.com/api/SeperateEvent", { EID: id })
    .then((response) => {
      console.log('okay')
      if (response.data === "not found") {
        router.replace('/Events')
      }
      else if (response.data.length > 0 && response.data !== "not found") {
        setTabTitle(`${props.title || response.data[0].ETitle}`)
        setLoaded(true)
        setEvent(response.data)
      }
    })
    .catch(err => {

      seterrorFetchedChecker((c) => !c);
    });
}
if (errorFetchedChecker) {
  setTimeout(() => {
    fetchData();
  }, [3000])// 3 seconds
} else {
  fetchData();
}}
  
  }, [errorFetchedChecker,id,router,props.title]);

  function youtubeParser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  return (
    <div className={Topstyles.root}>
       <NextSeo 
      title={TabTitle}
      description={TabTitle}
      />
      {Loaded ?  (Event.length > 0 ? <div> <div className={Topstyles.titleEng}>
        <p className={Topstyles.date}>{props.date || Event[0].EDate}</p>
        <h1 className={Topstyles.title}>{props.title || Event[0].ETitle}</h1>
     
        <Row> 
        {props.link || Event[0].ELink ? ( <Col xs={props.link || Event[0].ELink ? {order:0} :12} md={6}> <div className={stylesEvent.root} ><Youtube  className={Topstyles.YoutubeVid} videoId={youtubeParser(props.link || Event[0].ELink)}/></div> </Col>):""}
          <Col xs={props.link || Event[0].ELink ? {order:2} : 12} md={6}> 
        {/*   <AliceCarousel mouseTracking items={items} /> */}
          <EventsComp img={props.img || Event[0].EPhotos} />
</Col>
<Col  xs={props.link || Event[0].ELink ? {order:1} : 12} md={ props.link || Event[0].ELink ? {span:12,order:"first"} : 6}><div className={Topstyles.text}><p>{props.text2 || Event[0].EBrief}</p>
<p>{props.paragraph || Event[0].EParagraph||""}</p></div></Col>
</Row>
       
        
      </div>
       
      </div> : <Events />) : <Spinner />}


    </div>

  );
}
