import React,{useState,useEffect} from "react";
import stylesEvents from "../../styles/events.module.css";
import axios from 'axios'
import stylesDepPage from "../Departments/Departments.module.css";
import EventsCard from "./EventsCard";
import {Link} from 'react-dom'
import { Col, Row } from "react-bootstrap";
import Spinner from "../../components/ClipLoader/Spinner";
import { NextSeo } from 'next-seo'

export default function Events(props) {
  const [EventsLists, setEventsList] = useState([{t:1},{t:2}])
  const [Loaded, setLoaded] = useState('hi');

  useEffect( () => {
  async function fetchData(){
    await axios.get("https://www.scmp-lb.com/api/Events")
    .then((response)=>{ 
      setEventsList(response.data);
   
    setLoaded(true)
    }
    
    ).catch(err=>{
     
    })


  }
  fetchData()

      
  }, [])

  return ( <div className={stylesEvents.root}>
    
     <NextSeo 
      title='Events - Scientific Center For Manufacturing And Production'
      description='Events - Scientific Center For Manufacturing And Production'
      />
    { Loaded ?  
      <div>
{/*       <TopTitle title={"Events"}/>
 */}  <Row className={`g-4 ${stylesDepPage.root}`}>

    {EventsLists.length>0? EventsLists.map((val)=>{return <Col key={val.EID} xs={12} sm={6} md={6} lg={4}>
   
        <EventsCard  className={stylesDepPage.Col} link={val.ELink} date={val.EDate} Photos={val.EPhotos} paragraph={val.EParagraph} title={val.ETitle} text2={val.EBrief} src={val.EID}  img={`/events/${val.ECover} `}  />
      </Col>})  
:<div></div>} 
      </Row> 
   </div>
 
    :<Spinner/>}
   
 </div>
  );
}
