import styled from "styled-components";
import picture from "../assets/images/picture.webp"

export const Home: React.FC = () => {
    return (
      <Homestyled>
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>
          Je suis Heiarii, développeur passionné par React et TypeScript.
        </h2>
        <img src={picture} alt="Photo de Heiarii" className="picture"/>
      </Homestyled>
    );
  };

  const Homestyled = styled.div`
   
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b3552c;
  text-align: center;
  padding: 16px;
  position: relative;


 h1 {
  font-size: 6.5rem;
  color: #33efec;
}

 p {
  margin-top: 16px;
  font-size: 1.6rem;
  color: black;
}

.picture{
  position:absolute;
  bottom: 0px ;
  left: 0px ;
}
  `