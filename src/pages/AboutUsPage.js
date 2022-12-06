import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

function AboutUsPage() {
    return (
        <section>
            <Header />
            <Jumbotron />
            <AboutUs />
            <Footer />
        </section>
    );
}

export default AboutUsPage;