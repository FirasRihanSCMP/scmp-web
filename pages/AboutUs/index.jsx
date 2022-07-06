import React from 'react'
import AboutUsComp from '../../components/AboutUs/AboutUsComp'
import styles from './aboutUS.module.css'
import { NextSeo } from 'next-seo'

export default function AboutUs() {

  
  return (
    <div className={styles.AboutUs}>
      <NextSeo 
      title='About Us - SCMP'
      description='About Us - SCMP'
      />
              <p className={styles.Title}>About Us</p>
        <AboutUsComp/></div>
  )
}
