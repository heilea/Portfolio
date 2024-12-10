import { motion } from "motion/react";
import styled from "styled-components";


export const Home: React.FC = () => {

  
    

  return (
    <Homestyled>
          <h1>Bienvenue sur mon portfolio</h1>
          <h2>
            Je suis Heiarii, développeur passionné par <span>React et TypeScript.</span>
          </h2>

      

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
  position: relative;
  gap: 80px;
  
  div{
    width: 100%;
  }
.bdf{
  width: 150px;
  height:  150px;
  color: red;
  position: absolute;
  left: 40px;
  top: 50px;
  border-radius: 50%;
  background-color: yellow;
  
}
 h1 {
  font-size: 6.5rem;
  color: #33efec;
 
}

 h2 {
  margin-top: 16px;
  font-size: 1.6rem;
  color: black;
}
  `