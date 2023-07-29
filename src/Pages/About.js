import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";
import resumePDF from "../assets/resume.pdf"; 

function About() {
  const personalDetails = {
    name: "Gunwant Singh Sidhu",
    tagline: "A cheerful, enthusiastic coder....who loves making new things",
    img: profile,
    about:
      "I am a passionate and driven computer science student with a thirst for knowledge and a love for problem-solving. Fueled by curiosity, I embrace the ever-changing world of technology with enthusiasm",
  };

  const eduDetails = [
    {
      SchoolName:
        "Shri Guru Gobind Singh Ji Institute Of Engineering And Technology, Nanded",
      Year: "2020-2024",
      Percentage: "8.5",
    },
    {
      SchoolName: "Prtibha Niketan Mahavidyalaya, Nanded",
      Year: "2018-2020",
      Percentage: "74.77",
    },
    {
      SchoolName: "Gujrati High School, Nanded",
      Year: "2013-2018",
      Percentage: "91.60",
    },
  ];

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        <div className="edu-details mt-8">
          {eduDetails.map(({ SchoolName, Year, Percentage }) => (
            <div className="edu-card" key={SchoolName}>
              <h2 className="edu-school-name">{SchoolName}</h2>
              <p className="edu-year-percentage">
                {Year} ({Percentage})
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Display Resume Section */}
      <section className="py-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Resume
        </h1>
        <div className="flex justify-center items-center mt-4">
          <iframe
            src={resumePDF}
            title="Resume"
            width="600"
            height="800"
            className="shadow-lg"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default About;
