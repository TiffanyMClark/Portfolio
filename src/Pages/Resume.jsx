import React from "react";

export default function Resume() {
  const downloadResume = () => {
    const resumeContent = `
      Tiffany Clark
      Web Developer

      Front-end Proficiencies:
      - HTML
      - CSS
      - JavaScript
      - React
      - Responsive Web Design

      Back-end Proficiencies:
      - Node.js
      - Express.js
      - API Development
      - SQL

      Version Control:
      - Git
      - GitHub

      Additional Skills:
      - Problem-solving and Debugging
      - Collaboration & Teamwork

      Education:
      - Currently taking bootcamp classes for certification in coding

      Projects:
      - Project 1: A responsive webpage design
      - GitHub: https://github.com/lobungen/Project1
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Tiffany_Clark_Resume.txt";
    link.click();
  };

  return (
    <div>
      <h2>Resume</h2>

      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Responsive Web Design</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>API Development</li>
        <li>SQL</li>
      </ul>

      <h3>Version Control</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
      </ul>

      <h3>Additional Skills</h3>
      <ul>
        <li>Problem-solving and Debugging</li>
        <li>Collaboration & Teamwork</li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li>Currently taking bootcamp classes for certification in coding</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>
          Currently, we've only had one project to make a webpage with a
          responsive design,
          <a
            href="https://github.com/lobungen/Project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 1 on GitHub
          </a>
        </li>
      </ul>

      <button onClick={downloadResume}>Download Resume as Text File</button>
    </div>
  );
}
