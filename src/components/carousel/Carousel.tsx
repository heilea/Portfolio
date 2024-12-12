/*import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import projet from "../../assets/images/wGuIanG.jpeg";

const slideStyle: React.CSSProperties = {
  height: '300px',
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const MyCarousel: React.FC = () => {
  return (
    <Swiper  style={{ width: '100%' }}
    
      modules={[Navigation, Pagination]} // Modules utilisés
      loop={true}
      navigation // Activer les flèches de navigation
      pagination={{ clickable: true }} // Activer les points cliquables
      spaceBetween={50} // Espace entre les slides
      slidesPerView={2} // Nombre de slides visibles
    >
      <SwiperSlide>
        <div style={{ ...slideStyle, background: '#FFD700' }}>
          <img src={projet} alt="projet 1" style={imageStyle} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ ...slideStyle, background: '#ADFF2F' }}>
          <img src={projet} alt="projet 2" style={imageStyle} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ ...slideStyle, background: '#1E90FF' }}>
          <img src={projet} alt="projet 3" style={imageStyle} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
