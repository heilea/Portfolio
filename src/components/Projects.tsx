import styled from "styled-components";

export const Projects: React.FC = () => {
    const projects = [
      { id: 1, title: "Kasa", description: "Creer une single page application." },
      { id: 2, title: "Argent Bank", description: "Gerer un flux de donnee avec Redux" },
    ];
  
    return (
      <ProjectStyled>
        <h2>Mes Projets</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </ProjectStyled>
    );
  };

  const ProjectStyled = styled.div`
  
  height: 100dvh;
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

ul{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Grille responsive */
  gap: 1rem; /* Espacement entre les cartes */
  list-style: none; /* Retirer les puces de liste */
  padding: 0;
  margin: 0;
}

li{
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
}

h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

`