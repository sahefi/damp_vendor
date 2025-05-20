// Home.jsx
import React from 'react';
import SliderComponent from './components/slider';
import Kategori from './components/kategori';
import Rekomendasi from './components/rekomendasi';


const Home = () => {
    const mockSliderData = [
        {
            link: '/produk/1',
            banner: null,
            picture_web: '/img/banner_1.png',
            picture_mobile: '/img/banner_1.png',
        },
        {
            link: '/produk/2',
            banner: null,
            picture_web: '/img/banner_1.png',
            picture_mobile: '/img/banner_1.png',
        },
    ];

    const dummyKategori = [
        { name: 'Minuman', icon: 'FaBeer' },
        { name: 'Musik', icon: 'FaMusic' },
        { name: 'Kamera', icon: 'FaCamera' },
    ];

    const dummyArray = Array(6).fill(null);



    return (
        <div style={{ paddingTop: 20 }}>
            <div style={{ marginBottom: 40 }}>
                <SliderComponent listSlider={mockSliderData} loading={false} />
            </div>
            <div style={{ marginBottom: 40 }}>
            <Kategori
                listKategori={dummyKategori}
                loading={false}
                dummyArray={dummyArray}
            />
            </div>
            <div style={{ marginBottom: 40 }}>
            <Rekomendasi/>
            </div>

        </div>
    );
};

export default Home;