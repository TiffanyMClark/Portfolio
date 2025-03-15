import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/TiffanyMClark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tiffany-clark-aa47ba33a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
