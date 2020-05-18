import React from 'react';
import Hero from '../Components/Hero';

function About(props){

        return(
            <Hero title={props.title} text={props.text} />
        );
}

export default About;