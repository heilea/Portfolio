import'./Header.scss';
import { motion } from "motion/react";

export const Header: React.FC = () => {
  return (
    <>
      <header>
      <nav>
        <motion.a
          href="#home"
          whileTap={{ scale: 0.9 }}
        > Acceuil
        </motion.a>

        <motion.a
          href="#projects"
          whileTap={{ scale: 0.9 }}
        >Projetcs
        </motion.a>
        <motion.a
          href="#contact"
          whileTap={{ scale: 0.9 }}
        > Contact </motion.a>
      </nav>
      </header>
    </>
  );
};