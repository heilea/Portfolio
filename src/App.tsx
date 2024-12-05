import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import styled from "styled-components";


const App: React.FC = () => {
  return (
    <AppStyled>
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
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
 
`