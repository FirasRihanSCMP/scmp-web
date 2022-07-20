import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CarouselScmp from '../../components/CarouselScmp/CarouselScmp';
import Spinner from '../../components/ClipLoader/Spinner';
import styleSws from "./sws.module.css"
import { NextSeo } from 'next-seo'

export default function Sws() {
  const [Imgs, setImgs] = useState([]);
  const [Loaded, setLoaded] = useState(false)
  const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://www.scmp-lb.com/api/SWS")
        .then((response) => {

          if (response.data === "not found") {
            setLoaded(false)
            setImgs("");

          }
          else if (response.data.length > 0) {
            setLoaded(true)
            setImgs(response.data)
          }
        })
        .catch(err => {
          /*  console.log(err) */
          seterrorFetchedChecker((c) => !c);
        });
    }
    if (errorFetchedChecker) {
      setTimeout(() => {
        fetchData();
      }, [3000])// 3 seconds
    } else {
      fetchData();
    }
  }, [errorFetchedChecker]);



// after initialization you can change the fireworks parameters


  return <div>
       <NextSeo 
      title='Startup-Weekend Support 2022 - Scientific Center For Manufacturing And Production'
      description='Startup-Weekend Support 2022 - Scientific Center For Manufacturing And Production'
      />
     {Loaded ? <div >

    <div className={styleSws.root} id={"roots"}>
    <div className={styleSws.swsCarousel}><CarouselScmp style={20} img={Imgs} /></div>
    <h2 className={styleSws.header}>SCMP congratulates all participants in the SWS2022!</h2>

  
    <div className={styleSws.firstParagraph}>  
   <div className={styleSws.AllPhotos} >All photos of the event are available in the following <a className={styleSws.PhotoLink} href="https://drive.google.com/drive/folders/1-DIS0DJeLuYoSV1qNufTdy9PkQ7ej60P?usp=sharing">Link!</a>
</div>

After reviewing the business models and the feasibility studies, and consulting with specialized scientific committees, experts and business investors, the following two projects were approved to move to the stage of manufacturing prototypes:
<br/>
<br/>
<ol className={styleSws.Ol}>
<li className={styleSws.Li}>Dental Medical Products</li>
<li className={styleSws.Li}>3dLife</li>
</ol>
Best of luck for all!
    {/*   Greetings candidates!
    <br/><br/>
    <div className={styleSws.Indent}>
First of all, we would like to thank each participant that have joined us in our first Startup Weekend Support SWS-2022 event which was held on the 28th of May in cooperation with the Lebanese University. 
</div> <br/>
As you know, the number of applicants for this event has reached 76 competing teams, from whom we preselected 37 different ideas from various fields (Health, Agro-Food, Education, Technology and E-Business). 

After presenting these ideas in front of specialized committees composed of academics, experts and businessmen, it became clear to us that all the ideas have potential, but since we have to choose a finite number of ideas, these 37 chosen ideas were further filtered out and sorted according to the priorities that the Scientifc Center for Manufacturing and Production is looking for in addition to the consultation of the evaluation committee which led us to choose the following 14 ideas listed alphabetically, these 14 ideas will be proceeding to the next stage:
<br/><br/>
<ol className={styleSws.Ol}>
<li className={styleSws.Li}>3dLife </li>
<li className={styleSws.Li}>A Little goes a Long Way</li>
<li className={styleSws.Li}>Carrot Pulp Chips </li>
<li className={styleSws.Li}>Dental Medical Products</li>
<li className={styleSws.Li}>Edubolt</li>
<li className={styleSws.Li}>Educational Platform</li>
<li className={styleSws.Li}>Health and Diet</li>
<li className={styleSws.Li}>Khadamat</li>
<li className={styleSws.Li}>Makit</li>
<li className={styleSws.Li}>Multi-Vitamine Immune Boosting Lollipops </li>
<li className={styleSws.Li}>PP Bread</li>
<li className={styleSws.Li}>Shopex</li>
<li className={styleSws.Li}>Teeth Tech</li>
<li className={styleSws.Li}>Un Petit Goût</li>
</ol>
<br/>
The above-mentioned ideas that qualified for the semi-finals will be notified later on regarding the next steps.

As for the ideas that were not selected, they will remain with us in a list of ideas that will be presented to different businessmen and financiers in a frequent manner in hopes of finding someone interested in incubating them in order to grant you further opportunities and help you grow.
<br/> */}
</div>
{/*    
  
  
      <p className={styleSws.Application}> To Apply for this Event, Please Fill the Following  <a href="https://forms.gle/6cabDREDmKrLm4hm7" className={styleSws.formLink} >Application</a> before midnight of <span className={styleSws.oldDate}>6-May-2022</span></p>
   
      <h2 className={styleSws.newDate}>In response to some requests, the deadline of ideas submission has been extended until midnight of 15-May-2022!</h2>
<br/>
      <h1 className={styleSws.title}>Why SCMP's Startup Weekend?</h1>
      <p className={styleSws.firstParagraph}>The “Startup Weekend” aims to attract creative ideas and innovations of young people in order to achieve their ambitions and goals.

      </p>
      <div className={styleSws.firstParagraph}>Submitted applications will go through an initial screening formed by experts
        in different fields. Next, the participants of the selected proposals will have to present their ideas in front of moderators and judges.
        <br /><br />

        In the final stage, SCMP will provide the accepted proposals with the necessary:
        <br />
        <br />
        <ul className={styleSws.list}>
          <li className={styleSws.Li}>Financial</li>
          <li className={styleSws.Li}>Technical</li>
          <li className={styleSws.Li}>Legal</li>
          <li className={styleSws.Li}>Logistical</li>
        </ul>  <br /> Assistance to launch new Startups. <br /> <br />
        Another objective of this Weekend is benefiting from technology to stimulate innovation, to market ideas, and to promote cooperation between different stake holders.
        The competitive participation is open to ideas with technological background in the following fields:
        <br />
        <br />
        <div className="fields">
          <ul  >
            <li className={styleSws.Li}>Health</li>
            <li className={styleSws.Li}>Environment</li>
            <li className={styleSws.Li}>Educational Platforms</li>
            <li className={styleSws.Li}>Software Applications</li>
            <li className={styleSws.Li}>Agro-Food Development</li>
            <li className={styleSws.Li}>Energy, Water and Natural Resources</li>
            <li className={styleSws.Li}>
              E-Business, E-Commerce, Entrepreneurship
            </li>
            <li className={styleSws.Li}>Electronic, Electrical, and Mechanical Projects</li>

          </ul>

        </div>
      </div>
      <br />
      <h1 className={styleSws.title}>Confidentiality</h1>
      <div className={styleSws.firstParagraph}>
        <ol className={styleSws.Ol}>
          <li className={styleSws.Li}> No Use; <br />
            SCMP agrees not to use the Confidential Information in any way, or to manufacture or test any product embodying Confidential Information.</li>
          <li className={styleSws.Li}> No Disclosure; <br />
            SCMP agrees to use its best efforts to prevent and protect the Confidential Information, or any part thereof, from disclosure to any person other than Startup Weekend teamwork having a need for disclosure in connection with SCMP authorized use of the Confidential Information.
          </li>
          <li className={styleSws.Li}>Protection of Secrecy; <br />
            SCMP agrees to take all steps reasonably necessary to protect the secrecy of the Confidential Information, and to prevent the Confidential Information from falling into the public domain or into the possession of unauthorized persons.
          </li>
        </ol>


      </div>
      <div className={styleSws.applyBtnDiv}> <Button onClick={() => { window.location.href = "https://forms.gle/6cabDREDmKrLm4hm7" }} className={styleSws.applyBtn} variant='warning' >Apply Here!</Button></div>
    </div> */}</div> </div> : <div><Spinner /></div>} </div>




}
