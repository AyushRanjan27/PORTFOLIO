import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import SoftwareDev from "./sections/SoftwareDev";
import DataAnalytics from "./sections/DataAnalytics";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftwareDev />
        <DataAnalytics />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
