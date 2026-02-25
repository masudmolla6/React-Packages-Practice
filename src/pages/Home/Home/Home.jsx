import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;