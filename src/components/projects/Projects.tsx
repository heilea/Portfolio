import './Projects.scss';
import picture from '../../assets/images/wallpaperflare.com_wallpaper.jpg';

export const Projects: React.FC = () => {


  return (
    <>
      <div className="section_project">
        <h2>Mes Projets</h2>
        <div className="container_">
          <div className="card">
            <img src={picture} alt="Projet 1" />
            <h3>KASA</h3>
            <a href="https://github.com/heilea/P11-ArgentBank.git">Repository</a>
          </div>
          <div className="card card2"></div>
            <img src={picture} alt="Projet 2" />
            <h3>Argent Bank</h3>       
            <a href='https://github.com/heilea/P11-ArgentBank.git'>Repository</a>
        </div>
      </div>
    </>   
  );
};
