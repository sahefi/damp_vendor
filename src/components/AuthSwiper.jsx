import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';

const AuthSwiper = () => {
  const illustrationContainerStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const illustrationStyle = {
    maxWidth: '100%',
  };

  // Custom styles for swiper navigation buttons
  const swiperStyles = `
    .swiper-button-next,
    .swiper-button-prev {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 12px;
      color: #333;
      font-weight: bold;
    }
  `;

  return (
    <div style={illustrationContainerStyle}>
      <style>{swiperStyles}</style>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/img/auth_ilust.png" alt="Login illustration 1" style={illustrationStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/auth_ilust.png" alt="Login illustration 2" style={illustrationStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img/auth_ilust.png" alt="Login illustration 3" style={illustrationStyle} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthSwiper