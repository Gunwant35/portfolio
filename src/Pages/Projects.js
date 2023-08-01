import React from "react";
import Project from "../Components/Project";

function Projects() {
  const projectDetails = [
    {
      title: "Alohomora library management system",
      image: require("../assets/projects/project1.png"),
      description: `User-friendly MERN application for managing the database in the library. Allows users to perform CRUD operations on students and books.`,
      techstack: "MERN",
      githubLink: "https://github.com/aditi578/Alohomora.git",
    },
    {
      title: "Airbnb Clone - Booking Application using MERN",
      image: require("../assets/projects/project2.png"),
      description: `A seamless MERN stack Airbnb clone for booking accommodations, offering users the ability to replicate the core functionality of the original platform effortlessly.`,
      techstack: "MERN",
      githubLink: "https://github.com/Gunwant35/Airbnd_Clone.git",
    },
 
    {
      title: "Personal Portfolio",
      image: require("../assets/projects/project3.png"),
      description: `My personal portfolio is a website made of React JS Framework showcasing my skills, experience, and achievements . It serves as my digital resume, highlighting the my work samples, projects, and qualifications to create a positive impression and attract professional opportunities.`,
      techstack: "React",
      githubLink: "https://github.com/Gunwant35/React_Portfolio",
    },
    {
      title: "Dog World",
      image: require("../assets/projects/project4.png"),
      description: `
      A website made of HTML5 and CSS3 which contains all the fun information about dogs`,
      techstack: "HTML5 + CSS3",
      githubLink: "https://github.com/Gunwant35/Dog_World",
    },
    {
      title: "Django Student Management System",
      image: require("../assets/projects/project5.png"),
      description: `The Student Management System built with Django is a web application designed to efficiently manage student-related data in an educational institution. It allows administrators to perform CRUD operations on students.`,
      techstack: "Django",
      githubLink: "https://github.com/Gunwant35/Airbnd_Clone.git",
    }
  ];

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projectDetails.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              techstack={project.techstack}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;

