import styled from "styled-components";
import Carousel from "./Carousel";

export const Projects: React.FC = () => {
    
  
    return (
      <ProjectStyled>
        <h2>Mes Projets</h2>
        <Carousel />
      </ProjectStyled>
    );
  };

  const ProjectStyled = styled.div`
  
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dda86c;
  text-align: center;
  padding: 16px;
   


h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 16px;
}

`