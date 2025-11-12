import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import SpotlightCard from '../Components/New/New';
import Portfolio from '../Components/Hero/Hero';
import Skills from '../Components/Skills/Skills';
import AboutMe from '../Components/AboutMe/AboutMe';
import TechnicalSkills from '../Components/TechnicalSkills/TechnicalSkills';
import EducationQualification from '../Components/EducationQualification/EducationQualification';
import MyProject from '../Components/myProject/myProject';
import ContactWithMe from '../Components/Contact/Contact';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='px-3 md:px-6 lg:px-8'>
                <Portfolio></Portfolio>
                <Skills></Skills>
                <AboutMe></AboutMe>
                <TechnicalSkills></TechnicalSkills>
                <EducationQualification></EducationQualification>
                <MyProject></MyProject>
                <ContactWithMe></ContactWithMe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;