import React from 'react'
import Layout from './LayoutT/Layout'

export default function Family() {
    const family = [
        {
            icon1: 'https://brightstarschools.org/images/content-area-plane-bg-img.svg',
            icon2: 'https://brightstarschools.org/images/content-area-plane-bg-img-2.svg',
            title: 'Join our Bright Star Family',
            desc: '“Bright Star Schools helped me in many ways academically and emotionally. Even if I doubted myself, the staff and teachers all encouraged me. I was able to start as a sophomore at UCLA because I’ve taken all the opportunities that Bright Star has given me.”',
            image: 'https://brightstarschools.org/files/_cache/07c4dc8799aea6795eba751059b484db.jpeg',
            author: 'Bright Star alumna Kimberly M., UCLA, Class of 2022, Kayne Scholar',
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
