import './Contact.scss';

export const Contact: React.FC = () => {
  return (
    <>
      <div className="container">
        <h2>Contactez-moi</h2>
        <form>
          <input
            type="text"
            placeholder="Votre nom"
          />
          <input
            type="email"
            placeholder="Votre email"
          />
         <textarea placeholder="Votre message">
         </textarea>
          <button>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};
