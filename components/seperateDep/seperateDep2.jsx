import React from 'react'
import stylesDepartment from "./department.module.css";
import stylesHome from "../../styles/width.module.css"
import Paragraph from '../paragraph/paragraph'
import { NextSeo } from 'next-seo'

export default function SeperateDep2(props) {
    return (
     
        <div className={stylesHome.root} >
             <NextSeo 
      title={ `${props.dir} - Scientific Center For Manufacturing And Production`}
      description={ `${props.dir} - Scientific Center For Manufacturing And Production`}
      />
        <h1 className={stylesDepartment.depTitle}>
       {props.dir} Department
        </h1>
        <Paragraph order={"first"}  text={props.text} img={props.img} />

      </div> 
      
    )
}
