import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Footer from "./components/Footer";
import profilePic from "./assets/images/profile.jpg";

import "./assets/style/index.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <section id="about-me">
              <h2>About Me</h2>
              <div className="profile-photo">
                <img src={profilePic} alt="Tiffany Clark" />
              </div>
              <p>
                Hi, I'm Tiffany Clark I am currently in school to become a web
                developer! I specialize in front-end development using react and
                I have experience building back-end applications. I am
                proficient in JavaScript, CSS, Node, and React, and I enjoy
                tackling problems. I have a strong foundation in front-end
                development and am always eager to expand my skills. I enjoy
                working on challenging projects that push me to be better. When
                I'm not coding, I enjoy spending time with my family, reading,
                baking or just enjoying beach days!
              </p>
            </section>
          }
        />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}
