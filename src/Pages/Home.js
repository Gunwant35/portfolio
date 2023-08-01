import React from "react";
import profile from "../assets/profile.jpg";
import "./Home.css"; // Import your custom CSS file for Home component

const personalDetails = {
  name: "Gunwant Singh Sidhu",
  tagline: "A cheerful, enthusiastic coder....who loves making new things",
  img: profile,
  about:
    "Growing up, I had a curious mind, always seeking to understand how things worked. This curiosity led me to coding, where I discovered my love for building new things.",
  skills: ["C++", "C", "JAVA", "Python", "HTML", "CSS"],
  quotes: [
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Programming isn’t about what you know; it’s about what you can figure out. - Chris Pine",
    "The more I learn, the more I realize how much I don't know. - Albert Einstein",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  ],
};

function Home() {
  const { name, tagline, img, about, skills, quotes } = personalDetails;

  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="greeting">
          Hi, <span role="img" aria-label="waving-hand">👋</span>
          <br />
          My Name is
        </h1>
        <h1 className="name">
          {name}
        </h1>
        <h2 className="tagline">
          {tagline}
        </h2>
      </div>
      <div className="home-image">
        <img
          className="profile-image"
          src={img}
          alt="Gunwant Singh Sidhu"
        />
      </div>
      <div className="home-about">
        <h2 className="about-heading">Let Me Introduce Myself</h2>
        <p className="about-text">{about}</p>
        <div className="skills">
          <h3 className="skills-heading">Skills:</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill} className="skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="quotes-section">
        <h2 className="quotes-heading">Meaningful Quotes:</h2>
        <ul className="quotes-list">
          {quotes.map((quote, index) => (
            <li key={index} className="quote-item">"{quote}"</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
