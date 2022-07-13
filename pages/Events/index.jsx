import React, { useState, useEffect } from "react";
import stylesEvents from "../../styles/events.module.css";
import axios from "axios";
import stylesDepPage from "../Departments/Departments.module.css";
import EventsCard from "./EventsCard";
import { Link } from "react-dom";
import { Col, Row } from "react-bootstrap";
import Spinner from "../../components/ClipLoader/Spinner";
import { NextSeo } from "next-seo";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Events(props) {
  const [EventsLists, setEventsList] = useState();
  const [Loaded, setLoaded] = useState(false);
  const animationArray = ["fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "flip-up",
  "flip-down",
  "flip-left",
  "flip-right",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-in-left",
  "zoom-in-right",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-down",
  "zoom-out-left",
  "zoom-out-right"

  ];
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,

    });
    async function fetchData() {
      await axios
        .get("https://www.scmp-lb.com/api/Events")
        .then((response) => {
          if (response.data) {
            setEventsList(response.data);
            setLoaded(true);
          }
        })
        .catch((err) => { });
    }
    fetchData();
  }, []);

  return (
    <div className={stylesEvents.root}>
      <NextSeo
        title="Events - Scientific Center For Manufacturing And Production"
        description="Events - Scientific Center For Manufacturing And Production"
      />
      {Loaded === true ? (
        <div>
          {" "}
          <p className={stylesDepPage.departmentsTitle}>Events</p>
          <Row className={`g-4 ${stylesDepPage.root} ${stylesEvents.RowAnimation}`}>
            {EventsLists.length > 0 ? (
              EventsLists.map((val) => {
                return (
                  <Col
                 
                  data-aos={animationArray[Math.floor(Math.random() * animationArray.length)]}

                    key={val.EID}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                  >
                    <EventsCard
                                        
                      className={stylesDepPage.Col}
                      link={val.ELink}
                      date={val.EDate}
                      Photos={val.EPhotos}
                      paragraph={val.EParagraph}
                      title={val.ETitle}
                      text2={val.EBrief}
                      src={val.EID}
                      img={`/events/${val.ECover} `}
                    />
                  </Col>
                );
              })
            ) : (
              <div></div>
            )}
          </Row>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
