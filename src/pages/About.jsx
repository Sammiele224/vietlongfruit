import { Box } from '@chakra-ui/react';

import ProductHero from '../components/product/ProductHero';

import TestimonialSection from '../components/product/TestimonialSection';
import ValuesSection from '../components/home/ValuesSection';
import CSRSection from '../components/about/CSRSection';
import TeamSection from '../components/about/TeamSection';
import HealthyDiet from '../components/about/HealthyDiet';

import aboutBanner from '../assets/images/BG-01.jpg'; 

const About = () => {
    return (
        <Box bg="white">
            
            <ProductHero 
                title="About Us" 
                pageName="About Us" 
                bgImage={aboutBanner} 
            />
            
            <ValuesSection /> 

            <CSRSection /> 

            <TeamSection />

            <HealthyDiet /> 

            <TestimonialSection />

        </Box>
    );
};

export default About;