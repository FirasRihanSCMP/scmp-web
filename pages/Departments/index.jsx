import React, { useEffect,useState } from 'react'
import { Col, Row } from "react-bootstrap";
import { TabTitle } from '../../functions/GeneralFunctions'
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard'
import stylesDepPage from "./Departments.module.css";
import axios from 'axios';
import { NextSeo } from 'next-seo'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AllDepartments() {

  useEffect(() => {
    Aos.init({duration: 700,
    once:true});
  
  
  }, [])
  
    
    return (
        <div className={stylesDepPage.anim}>
           <NextSeo 
      title='Departments - Scientific Center For Manufacturing And Production'
      description='Departments - Scientific Center For Manufacturing And Production'
      />
             <p className={stylesDepPage.departmentsTitle}>Departments</p>
          <Row className={`g-4 ${stylesDepPage.root}`}>
       <Col data-aos="fade-up"  xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Studies"}  src={"Studies"} text={"The Directorate collects reliable data and do all the needed studies related to productive and industrial projects. "} text2={"The Directorate collects precise data and do all the needed studies related to productive and industrial projects. "}   className={stylesDepPage.Col} img={"lukas.webp"} />
      </Col>
      <Col data-aos="fade-up" data-aos-delay='50' xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Energy and Water"} src={"Energy"} text2={"We offer innovative and sustainable solutions for the production and consumption of energy and usage of water."} text={"We offer innovative and sustainable solutions for the production and consumption of energy and usage of water."}  className={stylesDepPage.Col}  img={"energycover.webp"} />
      </Col>
      <Col data-aos="fade-up" data-aos-delay='100' xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Food Industry"} src={"Food"} text={"Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."} text2={"Our vision in the Food Industry department is to be a leading provider of services, researchs and consultancies on agri-food sector."}   className={stylesDepPage.Col} img={"photo1.webp"} />
      </Col>
      <Col data-aos="fade-up" xs={12} sm={6} lg={4}>
      <DepartmentCard title={"Technology Broker"} src={"Technology"} text={"We use our knowledge, skills, and resources to increase the productive capacity of the economy."} text2={"We use our knowledge, skills, and resources to increase the productive capacity of the economy."} className={stylesDepPage.Col}  img={"techcover.webp"} />
      </Col>
      <Col data-aos="fade-up"  xs={12} sm={6} lg={4}>
        <DepartmentCard title={"Accelerator"}  src={"Accelerator"} text={"Accelerating your ideas towards a successful company is our main aim."} text2={"Accelerating your ideas towards a successful company is our main aim."}   className={stylesDepPage.Col} img={"rocket.webp"} />
      </Col>
      <Col data-aos="fade-up"  xs={12} sm={6} lg={4}>
        <DepartmentCard  title={"Venture Capital"}  src={"Venture"} text={"Expanding small businesses into bigger ones."} text2={"Expanding small businesses into bigger ones."}   className={stylesDepPage.Col} img={"venture (2).webp"} />
      </Col>
  
      
  
    </Row>  
        </div>
    )
}
