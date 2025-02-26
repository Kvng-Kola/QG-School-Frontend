import React from 'react'
import Layout from './LayoutT/Layout'

export default function Family() {
    const family = [
        {
            icon1: 'https://brightstarschools.org/images/content-area-plane-bg-img.svg',
            icon2: 'https://brightstarschools.org/images/content-area-plane-bg-img-2.svg',
            title: 'Join Quantum Groove   Family',
            desc: '“Quantum Groove School is the best! My teachers are so kind, and they make learning fun and exciting. I love the projects we do, the friends I’ve made, and all the cool activities. Every day, I feel happy and excited to come to school!”',
            image: 'https://img.freepik.com/free-photo/little-boy-with-notebooks_23-2149352360.jpg?t=st=1733411184~exp=1733414784~hmac=f11137dd307d87bf64322b8ee956bb75d5a0f7358084612129e68bcfefaf46ae&w=900',
            author: 'quantum groove  Class of 2022',
            btn: 'Enroll Today',
        }
    ]
  return (
    <div className='bg-grey5'>
        {
            family.map((item) => (
                <Layout
                title = {item.title}
                desc={item.desc}
                image={item.image}
                author={item.author}
                btn={item.btn}
                icon1={item.icon1}
                icon2={item.icon2}
                key={item.title}
                />
            ))
        }
    </div>
  )
}
