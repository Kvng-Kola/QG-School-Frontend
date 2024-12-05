import React from 'react'
import Layout from './LayoutT/Layout'

export default function Teacher() {
    const teacher = [
        {
            title: 'Hear From Quantum Groove  Teachers',
            desc: '“Teaching at Quantum Groove School is a joy. Every day, I have the privilege of guiding curious minds, fostering creativity, and watching students grow into confident, capable individuals ready to take on the world.”',
            image: 'https://img.freepik.com/free-photo/smiling-young-afro-american-student-sitting-desk-with-school-tools-pointing-laptop_141793-123179.jpg?t=st=1733412504~exp=1733416104~hmac=e3b2213cfc3783d9dfe76a124391d80a082eb87b883d2a8362ae3316d520b286&w=900',
            author: 'Qunatum Groove teacher',
            btn: 'Join Our Team',
        }
    ]
  return (
    <div>
        {
            teacher.map((item) => (
              <Layout
                title={item.title}
                desc={item.desc}
                image={item.image}
                author={item.author}
                btn={item.btn}
                key={item.title}
                reversed={true}
              />
            ))
        }
    </div>
  )
}
