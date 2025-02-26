import React from "react";
import Layout from "./LayoutT/Layout";

export default function Alumni() {
  const alumni = [
    {
      title: "Alumni Support & College Success",
      desc: '“Thanks to Quantum Groove School, I was fully prepared for college. The dedicated teachers and counselors guided me every step of the way, helping me build the skills and confidence I needed to succeed in higher education"',
      image: "https://img.freepik.com/free-photo/young-female-african-american-student-with-diploma-poses-outdoorsxa_627829-3973.jpg?t=st=1733411707~exp=1733415307~hmac=a6a4dcd2576b53256b5d5822f6bcd93271c2ba20b84f86c844eb2465ad7caba1&w=900",
      icon1:
        "https://brightstarschools.org/images/content-area-plane-bg-img.svg",
      icon2:
        "https://brightstarschools.org/images/content-area-plane-bg-img-2.svg",
      author: "Quantum Groove school alumnus  Class of 2020",
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
