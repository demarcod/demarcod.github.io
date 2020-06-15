import React from 'react';
import Hero from '../Components/Hero';

function About(props){

        return(
            <div>
                <Hero title={props.title} text={props.text} />
                <div className="about-content">
                    <div>
                    <img className="avatar-img" src={require('../Assets/Images/avatar.png')} />
                    </div>
                    <div className="about-text">
                        <h5 className="about-text-title">Education</h5>
                    </div>
                </div>
            </div>
        );
}

export default About;