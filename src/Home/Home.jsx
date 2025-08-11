import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import SpotlightCard from '../Components/New/New';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             <SpotlightCard></SpotlightCard>
             <SpotlightCard></SpotlightCard>
             <SpotlightCard></SpotlightCard>
            </div>
            <Footer></Footer>
       </div>
    );
};

export default Home;