import React from 'react'
import {useRouter} from 'next/router'
import InvFund from '../../components/AboutUs/InvFund'
import Ideas from '../../components/AboutUs/Ideas'
import Techprovider from '../../components/AboutUs/TechProvider'
import Research from '../../components/AboutUs/Research'
import AboutUsComp from '../../components/AboutUs/AboutUsComp'
import AboutUs from '.'
export default function Index() {

  const router= useRouter()
const id= router.query.id
const PageDisplay= (id)=>{ switch (id) {
  case  'InvFund':
    return <InvFund/>
    break;
  case 'Ideas': return <Ideas/>
  break;
  case 'TechProvider': return <Techprovider/>
  break;
  case 'Research' : return <Research/>
    default: return <AboutUs/>
    break;
}}
  return (
    <div>{PageDisplay(id)}  </div>
  )
}
