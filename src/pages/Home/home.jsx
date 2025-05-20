// Home.jsx
import React from 'react';
import SliderComponent from './components/slider';
import Kategori from './components/kategori';
import Rekomendasi from './components/rekomendasi';
import Testimoni from './components/testimoni';
import VendorList from './components/vendor';


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
        <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 40 }}>
            <SliderComponent listSlider={mockSliderData} loading={false} />
            <Kategori
                listKategori={dummyKategori}
                loading={false}
                dummyArray={dummyArray}
            />
            <Rekomendasi />
            <Testimoni/>
            <VendorList/>
        </div>
    );
};

export default Home;