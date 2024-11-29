import React from 'react'
import Layout from './LayoutT/Layout'

export default function Teacher() {
    const teacher = [
        {
            title: 'Hear From Bright Star Teachers',
            desc: '“I have never felt so motivated and empowered to teach. Bright Star Schools is an impressive organization that makes educators feel supported and equipped in their efforts to change lives.”',
            image: 'https://brightstarschools.org/files/_cache/0879fcb7ccc5bce3e16e390a57b0b1a0.jpeg',
            author: 'Bright Star teacher',
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
