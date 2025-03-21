import React from "react";
import project1Image from "../assets/images/eel.jpg";
import project2Image from "../assets/images/fish.jpg";
import project3Image from "../assets/images/manatee.jpg";
import project4Image from "../assets/images/sealion.jpg";
import project5Image from "../assets/images/highland.jpg";
import project6Image from "../assets/images/ladybug.jpg";
import project7Image from "../assets/images/kikis.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-buttons">
        <a
          href="https://lobungen.github.io/Project1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project1Image}
              alt="Project 1"
              className="portfolio-button-image"
            />
          </button>
        </a>

        <a
          href="https://github.com/TiffanyMClark/Cars-Trucks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project2Image}
              alt="Project 2"
              className="portfolio-button-image"
            />
          </button>
        </a>

        <a
          href="https://github.com/TiffanyMClark/Challenge-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project3Image}
              alt="Project 3"
              className="portfolio-button-image"
            />
          </button>
        </a>

        <a
          href="https://github.com/TiffanyMClark?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project5Image}
              alt="Project 4"
              className="portfolio-button-image"
            />
          </button>
        </a>
        <a
          href="https://github.com/TiffanyMClark?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project6Image}
              alt="Project 2"
              className="portfolio-button-image"
            />
          </button>
        </a>
        <a
          href="https://tiffanymclark.github.io/prework-study-guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="portfolio-button">
            <img
              src={project7Image}
              alt="Project 2"
              className="portfolio-button-image"
            />
          </button>
        </a>
      </div>
    </section>
  );
}
