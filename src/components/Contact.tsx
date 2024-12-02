import styled from "styled-components";

export const Contact: React.FC = () => {
    return (
      <ContactStyled>
        <h2>Contactez-moi</h2>
        <form className="mt-6 flex flex-col items-center">
          <input
            type="text"
            placeholder="Votre nom"
          />
          <input
            type="email"
            placeholder="Votre email"
          />
          <textarea
            placeholder="Votre message"
          ></textarea>
          <button>
            Envoyer
          </button>
        </form>
      </ContactStyled>
    );
  };

  const ContactStyled = styled.div`
     height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cf6b0cc7;
  text-align: center;
  padding: 16px;


 h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 16px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  color: #333;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #007bff;
}

form textarea {
  height: 100px;
  resize: none;
}

form button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button:hover {
  background: darkblue;
}
  `