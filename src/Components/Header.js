import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto md:flex justify-between py-4 max-width">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img
            className="w-14 logo"
            src={logo}
            alt="logo"
          />
        </NavLink>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden"
        >
          <svg
            className={`stroke-dark-heading dark:stroke-white ${
              isOpen ? "hidden" : ""
            }`}
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`stroke-dark-heading dark:stroke-white ${
              isOpen ? "" : "hidden"
            }`}
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L15 12.5M1 12.5L15 1"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`text-center ${
          isOpen ? "block" : "hidden"
        } md:flex justify-between mt-4 md:mt-0`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={() => setIsOpen(false)}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0 flex items-center">
            <div className="icon-group flex">
              <a
                href="https://leetcode.com/your-leetcode-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaCode className="icon" />
              </a>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
