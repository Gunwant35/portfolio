import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import profile from "../assets/profile.jpg";

const personalDetails = {
  name: "Gunwant Singh Sidhu",
  tagline: "A cheerful, enthusiastic coder....who loves making new things",
  img: profile,
  about:
    "Growing up I had curiosity in learning how things worked....which attracted me to coding because I love building new things.",
  skills: ["C++", "C", "JAVA", "Python", "HTML", "CSS"],
};

function Home() {
  const { name, tagline, img, about, skills } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-w-screen-lg px-4 md:px-8 pt-10 section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-4 md:mb-8"
        >
          Hi, 👋
          <br />
          My Name is
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-4 md:mb-8"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 md:ml-8">
        <img
          ref={myimageref}
          className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white shadow-lg object-cover"
          src={img}
          alt="Gunwant Singh Sidhu"
        />
      </div>
      <div className="md:w-1/2 mt-10">
        <h2 className="text-3xl text-dark-heading dark:text-light-heading font-bold mb-4">
          Let Me Introduce Myself
        </h2>
        <p className="text-lg text-content">{about}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Skills:</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill) => (
              <li key={skill} className="text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
