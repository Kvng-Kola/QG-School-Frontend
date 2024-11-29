import React from "react";
import Layout from "./LayoutT/Layout";

export default function Alumni() {
  const alumni = [
    {
      title: "Alumni Support & College Success",
      desc: '“It made me feel really good to know there’s someone in my corner. College can be stressful and to know there’s someone at Bright Star pushing me, saying ‘you got this,’ it felt really good to know I have that support."',
      image: "https://brightstarschools.org/files/_cache/523aece66062fa27b112129408d3a191.jpeg",
      icon1:
        "https://brightstarschools.org/images/content-area-plane-bg-img.svg",
      icon2:
        "https://brightstarschools.org/images/content-area-plane-bg-img-2.svg",
      author: "—Bright Star alumnus Jose C., Dartmouth College, Class of 2020",
      btn: "About Alumni Support",
    },
  ];
  return( 
    <div className="bg-grey5">
      {
        alumni.map((item) => (
          <Layout
          key={item.title}
          title={item.title}
          desc={item.desc}
          image={item.image}
          author={item.author}
          btn={item.btn}
          icon1={item.icon1}
          icon2={item.icon2}
          />
        ))
      }
    </div>
  );
}
