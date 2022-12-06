import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Category from '../components/Category';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <section className="homepage">
            <Header />
            <Jumbotron />
            <Category />
            <Introduction />
            <Footer />
        </section>
    );
}

export default HomePage;