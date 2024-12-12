import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;

