import styled from "styled-components";

export const Header: React.FC = () => {
    return (
      <HeaderStyled>
        <nav>
          <a href="#home">
            Accueil
          </a>
          <a href="#projects">
            Projets
          </a>
          <a href="#contact">
            Contact
          </a>
        </nav>
      </HeaderStyled>
    );
  };


  const HeaderStyled = styled.header`
    
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f8e0c8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 16px;


nav {
  display: flex;
  justify-content: center;
  gap: 16px
}
nav a {
  color: black;
  font-weight: bold;
  padding: 8px 12px;
  transition: color 0.3s, background-color 0.3s;
  font-size: 1.3rem
  
}

nav a:hover {
  background: #a7672c;
  color: #fff9f9da;
  border-radius: 4px;
}
  `