// SliderComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const SliderComponent = ({ listSlider = [], loading = false }) => {
    const config = {
        scrollbar: { draggable: true },
    };

    if (loading) {
        return <div className="skeleton img-banner rounded-4"></div>;
    }

    return (
        <Swiper
            style={{
                zIndex:0,
                width: '100%',
                maxWidth: '1100px',
                margin: '0 auto',
                borderRadius: 10,                
                overflow: 'hidden',
            }}
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
        >
            {listSlider.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="px-1">
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet={item.banner ?? item.picture_mobile}
                            />
                            <img
                                src={item.banner ?? item.picture_web}
                                className="img-banner rounded-4"
                                alt="Slider"
                                title="Slider"
                            />
                        </picture>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderComponent;
