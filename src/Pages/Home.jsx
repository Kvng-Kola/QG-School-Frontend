import React from 'react'
import Hero from '../Component/Hero'
import Future from '../Component/Future/Future'
import Impact from '../Component/Impact/Impact'
import OurSchool from '../Component/OurSchool/OurSchool'
import OurValue from '../Component/OurValue/OurValue'
import Blog from '../Component/Blog/Blog'
import Family from '../Component/Family'
import Teacher from '../Component/Teacher'
import Alumni from '../Component/Alumni'
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <>
    <Header/>
     <Hero />
     <Future/>
    <Impact
    image={'https://brightstarschools.org/files/galleries/icon-our-impact-schools.svg'}
    desc={'High School Graduation Rate (2023)'}
    title={'92%'}
    image1={'https://brightstarschools.org/images/icon-our-impact-2.svg'}
    desc1={'Bright Star Graduates Eligible for Cal State or UC Admissions'}
    title1={'100%'}
    image2={'https://brightstarschools.org/images/icon-our-impact-3.svg'}
    desc2={'Matriculation to 2- and 4-Year Colleges and Universities (2023)'}
    title2={'88%'}
    image3={'https://brightstarschools.org/images/icon-our-impact-4.svg'}
    desc3={'Counseling Minutes Yearly to Support Students and Families'}
    title3={'1.7 Million'}

    />
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
