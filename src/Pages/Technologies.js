import React from "react";

import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import vscode from "../assets/techstack/vscode.png";
import git from "../assets/techstack/git.png";
import github from "../assets/techstack/github.png";

function Technologies() {
  const techStack = {
    HTML: html,
    CSS: css,
    JavaScript: js,
    React: react,
  };

  const tools = {
    "Visual Studio Code": vscode,
    Git: git,
    GitHub: github,
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I'm using to make projects recently
        </p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          {Object.entries(techStack).map(([name, image]) => (
            <img src={image} alt={name} title={name} key={name} />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          {Object.entries(tools).map(([name, image]) => (
            <img src={image} alt={name} title={name} key={name} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
