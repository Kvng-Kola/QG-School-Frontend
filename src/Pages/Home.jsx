import React from 'react'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Future from '../Component/Future/Future'
import Impact from '../Component/Impact/Impact'
import OurSchool from '../Component/OurSchool/OurSchool'
import OurValue from '../Component/OurValue/OurValue'
import Blog from '../Component/Blog/Blog'
import Family from '../Component/Family'
import Teacher from '../Component/Teacher'
import Alumni from '../Component/Alumni'
import Footer from '../Component/Footer'

export default function Home() {
  return (
    <>
     <Header/>
     <Hero />
     <Future/>
     <Impact/>
     <OurSchool/>
     <OurValue/>
     <Blog/>
     <Family/>
     <Teacher/>
     <Alumni/>
     <Footer/>
    </>
  )
}
