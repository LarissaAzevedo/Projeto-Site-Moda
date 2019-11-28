import React from 'react';
import '../../sass/main.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <Banner />
            
            <Footer />
        </div>
    )
}
export default Home;