import React from "react";

function Project({ title, image, description, techstack, githubLink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-slate-900 w-96">
      <div className="aspect-w-16 aspect-h-9 cursor-pointer">
        {/* Use an element with fixed aspect ratio to maintain consistent card sizes */}
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="bg-white dark:bg-dark-card p-4 h-full flex flex-col">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-content pt-4 text-white">{description}</p>
        <h3 className="font-medium pt-4 text-gray-800 dark:text-white">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-end">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="underline text-blue-500 dark:text-blue-300"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
