import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Tiffany Clark</h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
